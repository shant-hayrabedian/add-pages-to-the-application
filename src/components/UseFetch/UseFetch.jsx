import {useEffect, useState} from "react";



const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // const url = 'http://localhost:8000/blogs';

    useEffect(() => {
        const abortCont = new AbortController()


        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could Not fetch th data for that resource');
                    }
                    return res.json();
                }).then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        // console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                        // setError(err.message);
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url])

    return {
        data, isPending, error
    }
}
export default UseFetch;