


const useServices = (asc,search) => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        //  fetch('http://localhost:5007/services')
        //  .then(res => res.json())
        //  .then(data => setServices(data))
        axiosSecure(`/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res => setServices(res.data))
    },[asc,max,min])

    return (
        services
    );
};

export default useServices;