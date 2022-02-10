import axios from "axios";
export const getStaticPaths=async()=>{
  const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts');
  
  const paths=data.map((cruElem)=>{


    return {
      params:{
        pageno:cruElem.id.toString(),
        
      }
    }
  }
  );
  console.warn(paths);
  return {
    paths,
    fallback:false,
  }

}
export const getStaticProps=async(context)=>{
  const id=context.params.pageno;
  console.warn(id)
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const {data}=await res.json();
  return{
    data:data,
  }
}
const myPage =({data})=> {
  return <>
        <div className="container-fluid" key={data.id}>
        <div className="col-md-12 ">
            <h2>{data.id}</h2>
            <h2>{data.title} </h2>
            <p>{data.body}</p>
        </div>
      </div>
        </>;
     }

export default myPage;