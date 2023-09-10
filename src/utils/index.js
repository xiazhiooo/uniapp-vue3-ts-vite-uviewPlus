// import store from '/src/store';

// 防抖
export function debounce(func, delay) {
    let timer;
    return function() {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

// 深克隆
export function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'shallowClone');
    }

    const targetObj = source.constructor === Array ? [] : {};

    Object.keys(source).forEach((keys) => {
        if (Object.prototype.hasOwnProperty.call(source, keys)) {
            // 正则字符串不按object进行处理
            if (source[keys] && typeof source[keys] === 'object' && !(source[keys] instanceof RegExp)) {
                targetObj[keys] = source[keys].constructor === Array ? [] : {};
                targetObj[keys] = deepClone(source[keys]);
            } else {
                targetObj[keys] = source[keys];
            }
        }
    });

    return targetObj;
}

// 数组对象去重
export function objRmRepeat(data, key) {
    // 去重
    const tmpObj = {};

    if (!key || !data || typeof data !== 'object' || data.constructor !== Array) {
        return [];
    }

    return data.reduce((cur, next) => {
        // 根据poNo去重
        tmpObj[next[key]] ? '' : tmpObj[next[key]] = true && cur.push(next);

        return cur;
    }, []);
}

// axios请求时，对象转url
export function objToUrl(obj) {
    const arr = [];

    if (Object.prototype.toString.call(obj) === '[object Object]') {
        for (const key in obj) {
            if (key && obj.hasOwnProperty(key)) {
                arr.push(`${key}=${obj[key]}`);
                objToUrl(obj[key]);
            }
        }
    }

    return arr.join('&');
}

// 通过字符串获取文件类型
export function getFileType(fileName) {
    // 后缀获取
    let suffix = '';
    // 获取类型结果
    let result = '';

    try {
        const flieArr = fileName.split('.');
        suffix = flieArr[flieArr.length - 1];
    } catch (err) {
        suffix = '';
    }

    // fileName无后缀返回 false
    if (!suffix) {
        return false;
    }

    suffix = suffix.toLocaleLowerCase();

    // 图片格式
    const imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];

    // 进行图片匹配
    result = imglist.find((item) => item === suffix);

    if (result) {
        return 'image';
    }

    // 匹配txt
    const txtlist = ['txt'];

    result = txtlist.find((item) => item === suffix);

    if (result) {
        return 'txt';
    }

    // 匹配 excel
    const excelist = ['xls', 'xlsx'];

    result = excelist.find((item) => item === suffix);

    if (result) {
        return 'excel';
    }

    // 匹配 word
    const wordlist = ['doc', 'docx'];

    result = wordlist.find((item) => item === suffix);

    if (result) {
        return 'word';
    }

    // 匹配 pdf
    const pdflist = ['pdf'];

    result = pdflist.find((item) => item === suffix);

    if (result) {
        return 'pdf';
    }

    // 匹配 ppt
    const pptlist = ['ppt', 'pptx'];

    result = pptlist.find((item) => item === suffix);

    if (result) {
        return 'ppt';
    }

    // 匹配 视频
    const videolist = [
        'mp4',
        'm2v',
        'mkv',
        'rmvb',
        'wmv',
        'avi',
        'flv',
        'mov',
        'm4v',
    ];

    result = videolist.find((item) => item === suffix);

    if (result) {
        return 'video';
    }

    // 匹配 音频
    const radiolist = ['mp3', 'wav', 'wmv'];

    result = radiolist.find((item) => item === suffix);

    if (result) {
        return 'radio';
    }

    // 其他 文件类型
    return 'other';
}

// 遍历数组对象，返回指定字段的一维数组
export function objListToArr(list, key) {
    const tmpList = list;
    const tmpArr = [];

    if (tmpList && key && tmpList.length) {
        for (let i = 0, len = tmpList.length; i < len; i += 1) {
            tmpArr.push(tmpList[i][key]);
        }
    }

    return tmpArr;
}

/**
 * 返回url携带的参数
 * @param {String} key 指定要返回的key | 非必填
 * @param {String} urlParmas 指定在这个字符串中返回参数 | 非必填
 * @returns 
 */
export function getUrlParames(key, urlParmas) {
    const query = urlParmas || decodeURIComponent(window.location.search.substring(1));

    const vars = query.split('&');
    const tmpPar = {};

    if (query) {
        for (let i = 0; i < vars.length; i += 1) {
            var pair = vars[i].split('=');
            var tmpKey = pair[0];
            var tmpValue = pair[1];

            if (!tmpPar[tmpKey]) {
                tmpPar[tmpKey] = tmpValue;
            } else if (tmpPar[tmpKey]) {
                // 如果相同的参数已存在，则以数组的方式存储返回
                if (typeof (tmpPar[tmpKey]) !== 'object') {
                    tmpPar[tmpKey] = [tmpPar[tmpKey]];
                }

                tmpPar[tmpKey].push(tmpValue);
            }

            if (key && tmpKey === key) {
                // 获取单个参数
                return tmpValue;
            }
        }
    }

    if (key) {
        // 获取单个参数但未匹配到
        return '';
    }

    return tmpPar;
}

/**
 * 移除url中的某个参数
 */
export function rmUrlParames(url, key) {
    const urlparts = url.split('?');

    if (urlparts.length >= 2) {
        // 参数名前缀
        const prefix = encodeURIComponent(key) + '=';
        const pars = urlparts[1].split(/[&;]/g);

        // 循环查找匹配参数
        for (let i = pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                // 存在则删除
                pars.splice(i, 1);
            }
        }

        return urlparts[0] + (pars.length > 0 ? ('?' + pars.join('&')) : '');
    }

    return url;
}

/**
 * 移除query中的某个参数
 * @param {*} obj 目标对象
 * @param {*} key 指定要移出的key
 * @returns 
 */
export function rmQueryParames(obj, key) {
    const newObj = {}

    Object.keys(obj).forEach(e => {
        if (e !== key) {
            newObj[e] = obj[e]
        }
    })
    return newObj;
}

/**
 * 数字输入框输入限制
 * @param {*} num 值
 * @param {*} len 小数位
 * @param {*} notNegative 不允许输入负数
 * @returns 
 */
export function numberInputLimit(num, len, notNegative = false) {
    // 将数值转为字符串方便处理
    let tmpNum = (num + '');

    // 得到第一个字符是否为负号
    const firstStr = tmpNum.charAt(0);

    // 先把非数字的都替换掉，除了数字和. 
    tmpNum = tmpNum.replace(/[^\d\.]/g, '');

    // 必须保证第一个为数字而不是.
    tmpNum = tmpNum.replace(/^\./g, '');

    // 必须保证开头最多一个0
    tmpNum = tmpNum.replace(/^00/g, '0');

    // 保证只有出现一个.而没有多个. 
    tmpNum = tmpNum.replace(/\.{2,}/g, '.');

    // 保证.只出现一次，而不能出现两次以上
    tmpNum = tmpNum.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');

    // 保留小数
    if (len !== undefined) {
        // 小数位
        const decimalLen = parseInt(len);
        // 定义用于处理小数位的变量
        const decimalStr = tmpNum.split('.');

        if (decimalLen === 0) {
            // 直接移除小数点后的值
            tmpNum = decimalStr[0];
        } else if (decimalStr[1] && decimalStr[1].length >= decimalLen) {
            tmpNum = Number(tmpNum).toFixed(decimalLen);
        }
    }

    // 如果第一位是负号，则允许添加
    if (!notNegative && firstStr === '-') {
        tmpNum = '-' + tmpNum;
    }

    return tmpNum;
}

/**
 * 获取可选列表对应的选项
 * @param {*} data 可选列表
 * @param {*} value 值
 * @param {*} valueKey 值对应的key 
 */
export function getOptionCurrentItem(data, value, valueKey) {
    const tmpKey = valueKey || 'value';

    if (!Array.isArray(data)) {
        return {};
    }

    const tmpdata = data.filter(item => item[tmpKey] === value);

    return tmpdata.length ? tmpdata[0] : {};
}

/**
 * 移除值左右空格
 * @param {*} source 
 * @returns 
 */
export function removeAllSpaces(data) {
    if (!data && typeof data !== 'object') {
        throw new Error('error arguments', 'shallowClone');
    }

    const targetObj = data.constructor === Array ? [] : {};

    Object.keys(data).forEach((keys) => {
        if (Object.prototype.hasOwnProperty.call(data, keys)) {
            const tmpVal = data[keys];

            // 正则字符串不按object进行处理
            if (tmpVal && typeof tmpVal === 'object' && !(tmpVal instanceof RegExp)) {
                targetObj[keys] = tmpVal.constructor === Array ? [] : {};
                targetObj[keys] = removeAllSpaces(tmpVal);
            } else if (typeof tmpVal === 'string') {
                // 移除左右空格
                targetObj[keys] = tmpVal.replace(/(^\s*)|(\s*$)/g, '');
            } else {
                targetObj[keys] = tmpVal;
            }
        }
    });

    return targetObj;
}