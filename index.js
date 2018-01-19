import './reset.less'
import './main.less'

let func = () => {
  console.log('array function..')
}
func()

$('#btn').on('click', loadDate)

function loadDate() {
  $('#status').text('Loading...')
  $.ajax({
    method: 'GET',
    dataType: "jsonp",
    url: 'https://api.douban.com/v2/movie/top250?count=10'
  }).done(function (data) {
    console.log('data->', data)

    for (let i = 0; i < data.subjects.length; i++) {
      let ele = data.subjects[i];
      let img = document.createElement('img')
      img.src = ele.images.small
      $('#status').text('loaded!')
      $('#douban250').append(img)
    }
  })
}