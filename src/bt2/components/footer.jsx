import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='md:flex md:justify-center items-center text-white gap-8 md:h-16 h-full bg-[#53382c] p-2 md:p-0 '>
      <div >© 2018 Highlands Coffee. All rights reserved</div>
      <div><a><span><SendIcon fontSize='small'/> Đăng ký để nhận bản tin</span></a></div>
      <div><a href="mailto:customerservice@highlandscoffee.com.vn"><span> <EmailIcon fontSize='small' /> customerservice@highlandscoffee.com.vn</span></a></div>
    </div>
  )
}

export default Footer
