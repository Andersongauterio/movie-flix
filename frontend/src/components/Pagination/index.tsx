import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';
import './styles.css';

const Pagination = () => {
	return (
		<ReactPaginate
			pageCount={5}
			marginPagesDisplayed={5}
			containerClassName="pagination-container"
			pageLinkClassName="pagination-item"
			breakClassName="pagination-item"
			previousClassName="arrow-previous"
			nextClassName="arrow-next"
			activeLinkClassName="pagination-link-active"
			disabledClassName="arrow-inactive"
			previousLabel={
				<div className="pagination-arrow-container">
					<ArrowIcon />
				</div>
			}
			nextLabel={
				<div className="pagination-arrow-container">
					<ArrowIcon />
				</div>
			}
		/>
	);
};

export default Pagination;
