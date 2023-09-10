export const getFriendlyDate=(dateString)=>{
  const date = new Date(dateString);
  const today = new Date();

  // 计算日期差距（以天为单位）
  const timeDiff = Math.floor((today - date) / (1000 * 60 * 60 * 24));

  if (timeDiff === 0) {
    // 判断是否是今天
    const hoursDiff = Math.floor((today - date) / (1000 * 60 * 60));
    if (hoursDiff === 0) {
      // 判断是否是同一小时
      const minutesDiff = Math.floor((today - date) / (1000 * 60));
      return `${minutesDiff}分钟前`;
    } else {
      return `${hoursDiff}小时前`;
    }
  } else if (timeDiff === 1) {
    return "昨天";
  } else if (timeDiff <= 7) {
    return `${timeDiff}天前`;
  } else {
    return date.toLocaleDateString().replace(/\//g, '-');;
  }
}