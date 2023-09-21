export default function ListBox(props)
{
return (<>
<ul>
    {props.data.map((lst,index)=><li key={index}>{lst.name}</li>)}
</ul>
</>)
}