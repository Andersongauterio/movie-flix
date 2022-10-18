import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
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
        onInsertReview(response.data);
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
          <div className="invalid-feedback d-block">{errors.text?.message}</div>
        </div>

        <div className="form-review-btn">
          <button className="btn btn-primary">SALVAR AVALIAÇÃO</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
