import './style.scss';
import React, { useState } from 'react';

function List() {
  return (
    <>
      <div className='slang-list'>
        <div class='d-grid gap-2 col-6 mx-auto'>
          <button
            class='btn btn-primary'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Slang1
          </button>

          <button
            class='btn btn-success'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Slang2
          </button>
        </div>
        <div class='modal' id='exampleModal' tabindex='-1'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title'>Modal title</h5>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                <p>Modal body text goes here.</p>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button type='button' class='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;