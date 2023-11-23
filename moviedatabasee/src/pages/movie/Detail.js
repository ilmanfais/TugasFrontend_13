import React, { useEffect, useState } from 'react';
import GetDetailMovie from '../../utils/networks/GetDetailMovie';
import { useParams } from 'react-router-dom';
import Button from '../../components/ui/Button';
import styled from 'styled-components';

const Detail = () => {
    const { id } = useParams()
    const [ movie, setMovie  ] = useState({})
    const [ genres, setGenres] = useState([])

    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`

    const getDetail = async(id) => {
        const data = await GetDetailMovie(id)
        await setMovie(data)
        await setGenres(data.genres)
    }

    useEffect(() => {
        getDetail(id)
    }, [id]);

    console.log(movie);

    return (
        <DetailStyle className="container"  >
            <section className="hero">
               <div className="hero__left">
                    <h2 className="hero__title">{movie.original_title}</h2>
                    <h3 className="hero__tagline">{movie.tagline}</h3>
                    <p className="hero__desc">{movie.overview}</p>
                    {
                        genres.map(
                            function(item){
                                return(
                                    <p className="hero__genre">{item.name}</p>
                                )
                            }
                        )
                    }
                    <p className="hero__date">{movie.release_date}</p>
                    <Button variant="primary">Wacth</Button>
               </div>

               <div className="hero__right">
                    <img className="hero__image" src={url_image} alt='' />
               </div>
            </section>
        </DetailStyle>
    );
}

const DetailStyle = styled.div`
    .container {
         margin: 1rem;
    }

    .hero {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }

    .hero__title {
        color: 	#ffffff;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    .hero__tagline {
        color: 	#fff;
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    .hero__genre {
        color: #fff;
        margin-bottom: 0.4rem;
        font-size: 1rem;
        font-weight: bold;
    }

    .hero__desc {
        color: #ffffff;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }

    .hero__date {
        color: #fff;
        margin-bottom: 1rem;
        font-size: 0.80rem
    }

    .hero__image {
        max-width: 100%;
        height: auto;
        margin-top: 1rem;
        border-radius: 25px;
    }

    @media (min-width: 768px) {}

    @media (min-width: 992px) {
        .container {
            max-width: 1200px;
            margin: 3rem auto;
        }
        .hero {
            margin: 1rem 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }
        .hero__right {
            margin-left: 1rem;
            flex-basis: 60%;
        }
    }
`

export default Detail;
