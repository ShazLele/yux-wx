function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatPreHTML(html){
html = html.replace(/<img src="\//g, '<img src="http://www.moguiweb.com.cn/');
          //去掉代码
          html = html.replace(/<(\/)?pre>?/g, 'MyCodeLabel');
          let arr = html.split('MyCodeLabel'); 
          let newArr = [];
          for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
              newArr.push(arr[i]);
            }
          }
          html = newArr.join('<div style="font-size:30rpx;text-align:center;padding:20rpx;background:#eee;">手机端无法查看代码</div>');
  return html;
}

module.exports = {
  formatTime: formatTime,
  formatPreHTML:formatPreHTML
}
