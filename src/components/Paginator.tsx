interface PaginatorProps {
    jobsPerPage: number
    totalJobs: number
    paginate: Function
    currentPage: number
}

const Paginator = ({jobsPerPage, totalJobs, paginate, currentPage}:PaginatorProps) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalJobs/jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    return ( 
        <div className="flex justify-around  w-[200px] bg-slate-200 p-3 rounded self-center">
            {pageNumbers.map(number => (
                <p key={number}>
                    <a onClick={() => {paginate(number)}} className={`paginatorButtons + ${number == currentPage ? 'active' : ''} + cursor-pointer`}>
                        {number}
                    </a>
                </p>
            ))}
        </div>
    )
}

export default Paginator;