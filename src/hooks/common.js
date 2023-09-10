/**
 * @description 返回多级页面
 * */
export const hookGoBack = (delta = 1) => {
    let back = getCurrentPages();
    if (back && back.length > 1) {
      uni.navigateBack({
        delta,
      });
    } else {
      history.back();
    }
}