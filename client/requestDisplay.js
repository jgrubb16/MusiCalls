/**
 * ************************************
 *
 * @module  requestDisplay
 * @author  Jordan Grubb    
 * @date    November 17
 * @description presentation component that renders client input field 
 *
 * ************************************
 */


import React from 'react';

const requestDisplay = (props) => {
    console.log('PROPS: ',props)
      return (
      <div className="requestBox">
        
   <form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

      <p>
          <label htmlFor='marketId'>% of total: </label>
          <span id='marketId'>{Math.floor((props.marketList.cards / props.totalCards) *100) }</span>
      </p>
        
        <button type='submit' onClick={(e) => props.addCard(props.idx)} id="addCard-button" >Add Card</button>
         <button type='submit' onClick={(e) => props.deleteCard(props.idx)} id="deleteCard-button">Delete Card</button>  
      </div>
    )
    };




export default MarketDisplay;


