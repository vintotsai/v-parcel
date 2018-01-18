import './reset.less'
import './main.less'

const log = console.log.bind(console)

log('in js..')

let func = () => {
  log('array function..')
}
func()

$('#app').text('Hello parcel.').css('color','white')