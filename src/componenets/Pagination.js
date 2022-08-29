import React, { useEffect, useState } from 'react';

const Pagination = ({pages,setCurrentPage,currentEmployee}) => {

  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(()=>{
setCurrentPage(currentButton);
  },[currentButton,setCurrentPage])

  return (
    <div className="clearfix">
      <ul className="pagination">
        <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
          onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
        >Previous</a></li>
        {

          pageNumbers.map((page, index) => {
            return(
              <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}><a href="#!" className="page-link"
              onClick={()=>setCurrentButton(page)}
              >{page}</a></li>
            )
          })

        }
        <li className={`${currentButton === pageNumbers.length ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
          onClick={() => setCurrentButton((prev) => prev === pageNumbers.length ? prev : prev + 1)}
        >Next</a></li>

      </ul>
    </div>
  )
}

export default Pagination;

/* <li class="page-item"><a href="#" class="page-link">1</a></li>
<li class="page-item"><a href="#" class="page-link">2</a></li>
<li class="page-item active"><a href="#" class="page-link">3</a></li>
<li class="page-item"><a href="#" class="page-link">4</a></li>
<li class="page-item"><a href="#" class="page-link">5</a></li>
<li class="page-item"><a href="#" class="page-link">Next</a></li> */