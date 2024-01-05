

export default function Button(props) {
  return (
    <button className={'btn btn-circle '+ props.className} title ={props.title}>
        <i className={props.icon}></i>
    </button>
  )
}


