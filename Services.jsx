

import Servicecard from "./Servicecard";
import useServices from "./useServices";



const Services = () => {
    
    const [asc,setAsc] = useState(true)
    // const [min,setMin] = useState(undefined);
    // const [max,setMax] = useState(undefined);
    const [search,setSearch] = useState('')

    // if(max min change useServices(min) useServices(max))
    const services = useServices(asc,search)
    //     useEffect(() => {
//         fetch('https://car-doctor-server-topaz-one.vercel.app/services?sort=${asc ? 'asc' : 'des'}&search=${search}')
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])

    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value
        setSearch(searchText)
    }

    return (

        <form onSubmit={handleSearch} action="">
            <input type="text" name="search" id="" />
            <input type="submit" value="Search" className="btn" />
        </form>
  
        <button onClick={()=>setAsc(!asc)} className="btn">{
            asc ? 'high to low' : 'low to high'
        }</button>

        <div className="mt-10">
            
          <div>
           <h3 className="text-3xl text-orange-400 text-center">Our services</h3>  
           <h2 className="text-5xl text-center">Our services area</h2>  
           <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde nobis ea odit voluptatum natus beatae. Repellendus mollitia amet libero.</p>
         </div>  
           <p className="text-6xl text-center">{services.length}</p>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {
                services.map(service => <Servicecard key={service._id}
                service={service}></Servicecard> )
              }
           </div>
        </div>
    );
};

export default Services;