import React, { memo } from 'react'
import {Pagination} from 'antd'
import {SPWrapper} from './style'
export default memo(function ZXSearchPagination({size,total, onChange}) {
  return (
    <SPWrapper>
      <Pagination
        defaultCurrent={1}
        pageSize={size}
        total={total}
        showSizeChanger={false}
        onChange={e => onChange(e)}
        className={"pagination"}
      />
    </SPWrapper>
  )
})
