import './reset.less'
import './main.less'

const log = console.log.bind(console)

log('in js..')

let func = () => {
  log('array function..')
}
func()

$('#app').text('Hello parcel.').css('color', 'white')

$('#btn').on('click', loadDate)

function loadDate() {
  log('clicked...')
  $('#status').text('Loading...')
  $.ajax({
    method: 'GET',
    dataType: "jsonp",
    url: 'https://api.douban.com/v2/movie/top250?count=10'
  }).done(function (data) {
    console.log('data->', data)
    for (var i = 0; i < data.subjects.length; i++) {
      var ele = data.subjects[i];
      var img = document.createElement('img')
      img.src = ele.images.small
      $('#status').text('loaded!')
      $('#douban250').append(img)
    }
  })
}