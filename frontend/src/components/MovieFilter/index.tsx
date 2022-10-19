import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { requestBackend } from 'util/requests';
import './styles.css';

export type GenreFilterData = {
  genre: Genre | null;
};

const MovieFilter = () => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { register, handleSubmit, setValue, getValues, control } =
    useForm<GenreFilterData>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/genres',
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setSelectGenres(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="movie-filter-container">
      <div className="movie-filter-genre-container">
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={selectGenres}
              isClearable
              placeholder="Gênero"
              classNamePrefix="movie-filter-select"
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default MovieFilter;
