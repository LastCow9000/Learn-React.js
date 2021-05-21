import React from 'react';

function Hello(props) {
  return <div style={{ color: props.color }}>하이헬로우 {props.name}</div>
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;