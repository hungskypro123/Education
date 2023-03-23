import {isEmpty} from './index'
import { emailPattern } from './index'

const validateLoginInput = (data) => {
  let errors = {}
  const {textEmail, textpassWord} = data

  if (!textEmail || !emailPattern.exec(textEmail) ) {
    errors.phone = 'Vui lòng nhập email hợp lệ'
  }
  if (!textpassWord || textpassWord.length < 6) {
    errors.password = 'Vui lòng nhập mật khẩu ít nhất 6 ký tự'
  }
  if (isEmpty(textEmail)) {
    errors.phone = 'Vui lòng nhập số điện thoại'
  }
  if (isEmpty(textpassWord)) {
    errors.password = 'Vui lòng nhập mật khẩu'
  }

  return {errors, isValid: isEmpty(errors)}
}

export default validateLoginInput
