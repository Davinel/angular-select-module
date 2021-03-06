export const styles = ` .angular-select {
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 18px;
}
  .angular-select__select-box {
    height: 40px;
    line-height: 40px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, .15);
    background: #ffffff;
    padding: 0 25px 0 5px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  @media (max-width: 767px) {
  .angular-select__select-box {
      display: none
  }
    }
  .angular-select__select-box:after {
      content: ' ';
      width: 0; 
      height: 0; 
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #000000;
      position: absolute;
      right: 4px;
      top: 50%;
      -webkit-transform: translate(0, -50%);
              transform: translate(0, -50%);
    }
  .angular-select__select-box--open:after {
        content: '';
        display: none;
      }
  .angular-select__select-box--open.angular-select__select-box--with-search {
      padding: 0;
    }
  .angular-select__search {
    width: 100%;
    height: 100%;
    font-size: 18px;
    background: #ffffff;
    -webkit-box-shadow: none;
            box-shadow: none;
    outline: none;
    border: 0;
    padding: 0 4px;
  }
  .angular-select__select-box-clear:before {
      content: '✕';
      position: absolute;
      right: 20px;
      top: 50%;
      -webkit-transform: translate(0, -50%);
              transform: translate(0, -50%);
    }
  .angular-select__options-list {
    display: none;
    list-style: none;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0;
    padding: 5px 0;
    position: absolute;
    width: 100%;
    max-height: 200px;
    overflow: auto;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, .15);
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
            box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  }
  .angular-select__options-list--open {
      display: block;
    }
  .angular-select__option {
    cursor: pointer;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
  }
  .angular-select__option:hover, .angular-select__option--selected {
      background: #428BCA;
      color: #ffffff;
    }
.angular-select select {
  display: none;
}
@media (max-width: 767px) {
.angular-select select {
    display: block
}
  }`;
