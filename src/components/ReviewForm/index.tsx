import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  movieId: string;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setValue('text', '');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-review-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-review-input">
          <input
            className="form-control"
            {...register('text', { required: 'Campo obrigatório' })}
            name="text"
            type="text"
            placeholder="Deixe sua avaliação aqui"
          />
          <div>{errors.text?.message}</div>
        </div>
        <div className="form-review-btn">
          <button className="btn btn-primary">SALVAR AVALIAÇÃO</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
