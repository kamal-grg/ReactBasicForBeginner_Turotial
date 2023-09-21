export default function OutputPart(props)
{
    return (<>
    Result
        <input type="text" name="sum" value={props.values.sum} onChange={props.onChange} /><br/>
        </>
        )
}