
  
  (function () {


    
  
  
    const template = document.createElement('template')
    template.innerHTML = `

    
    <div class="popup-background" id="popup-background"></div>

    <div class="popup" id="popup">
            <p>Error, invalid dates selected</p>
            <button id="closePopup">Close</button>
    </div>

    <div class="row" id="Tile" style="width: 99%; height: 85%;">
    <div id="Column3" style="padding: 0px 0px 0px 0px"> 
        <div class="month">
          <ul>  
            <li id="NextButton" class="next">&#10095;</li>
            <li id="NextButtonText" style="font-size:18px">2023</li>
          </ul>
        </div>

        <div class="months">
          <div class="monthsdiv" id="right_1">Jan</div>
          <div class="monthsdiv" id="right_2">Feb</div>
          <div class="monthsdiv" id="right_3">Mar</div>
          <div class="monthsdiv" id="right_4">Apr</div>
          <div class="monthsdiv" id="right_5">May</div>
          <div class="monthsdiv" id="right_6">Jun</div>
          <div class="monthsdiv" id="right_7">Jul</div>
          <div class="monthsdiv" id="right_8">Aug</div>
          <div class="monthsdiv" id="right_9">Sep</div>
          <div class="monthsdiv" id="right_10">Oct</div>
          <div class="monthsdiv" id="right_11">Nov</div>
          <div class="monthsdiv" id="right_12">Dec</div>
        </div>
      </div> 

      <div id="Column2"> 
        <div class="month">
          <ul>
            <li id="PreviousButton" class="prev">&#10094;</li>
            <li id = "PreviousButtonText" style="font-size:18px">2022</span></li>
          </ul>
        </div>
  
  
  
        <div class="months">
          <div class="monthsdiv" id="left_1">Jan</div>
          <div class="monthsdiv" id="left_2">Feb</div>
          <div class="monthsdiv" id="left_3">Mar</div>
          <div class="monthsdiv" id="left_4">Apr</div>
          <div class="monthsdiv" id="left_5">May</div>
          <div class="monthsdiv" id="left_6">Jun</div>
          <div class="monthsdiv" id="left_7">Jul</div>
          <div class="monthsdiv" id="left_8">Aug</div>
          <div class="monthsdiv" id="left_9">Sep</div>
          <div class="monthsdiv" id="left_10">Oct</div>
          <div class="monthsdiv" id="left_11">Nov</div>
          <div class="monthsdiv" id="left_12">Dec</div>
        </div>
      </div> 

      

      <div id="Column4"> 
        <div class="buttonrow" style="width: 99%; height: 12%;">
        <div id="options"><b>Options</b></div> 
          <div id="YTDButton" class="button">Year to Date</div>
          <div id="DETButton" class="button">Detail</div>
          <div id="MATButton" class="button">MAT</div>
          <div id="QTDButton" class="button">QTD</div>
          <div id="MQTButton" class="button">MQT</div>
          <div id="MonthButton" class="button">Month</div>
          
      </div>

      

      </div> 
    </div> 
  </div>

  <div id="TileBottom" style="width: 99%; height: 10%;"> 
    <div id ="displayDates"> Select Dates... </div>
    <div id="Apply"><button id="ApplyButton">Apply</button></div> 
    <div id="reset"><button id="ResetButton">Reset</button></div> 
  </div>

   

    <style>

    /*style of column 3 (apply button, time options)*/

    /* Styles for the popup */
    .popup {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        text-align: center;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    .popup-background {
      display: none;
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #474747;
      opacity: 0;
      transition: all 0.5 linear;
      -webkit-transition: same!
      -moz-transition: same!
      -o-transition: same!
    }
    .popup-background.visible {
      display: block;
      opacity: .6;
    }

    /*style for Apply button*/
    #ApplyButton{
      background-color: #046d9e;
      Color: white;
      

    }

    #displayDates{
      text-align: center;
      flex: 1;
    }

    #ApplyButton, #ResetButton{
        margin-left: 10px;   
        margin-right: 20px;
        width: 80%;
        border-radius: 4px;
    }

    #options{
      padding: 3% 10%;
      height: 100%;
    }

    .button
    {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-color: white;
      font-weight: normal;
    }

    .button.active
    {
    background-color: #046d9e;
    color: white;
    }
   

    #buttonrow
    {
        width:100%;
        text-align: center;
      
    }

    #Tile {
      border-style: solid;
      border-radius: 3px;
      border: 1px solid black;
  }

  #TileBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    background-color: #f2f2f2;
    border-radius: 3px;
    border: 1px solid black;
    bottom: 0;
}

  #Column2 {
      align-items: center;
      border-left: 1px solid #FF0000;
      float: right;
      text-align: center;
      width: 40%;
      height: 100%;
      border-color: black;
      background-color: white !important;
      
  }
   #Column3 {
      float: right;
      border-left: 1px solid #FF0000;
      width: 40%;
      height: 100%;
      border-color: black;
      background-color: white !important;
      
  }

  #Column4 {
    /*width: 19.8%;*/
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    height: 100%;
    border-color: black;
    background-color: white !important;
    
}


    ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}

/* Month header */
.month {
  /* padding: 20px 40px;*/
  width: 100%;
  height: 15%;
  background: #046d9e;
  text-align: center;
}

/* Month list */
.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-top: 3%;
}

/* Previous button inside month header */
.month .prev {
  float: left;
  padding-left: 20%;
}

/* Next button */
.month .next {
  float: right;
  padding-right: 20%;
}

/* Days (1-31) */
.months {
    background: #fff;
    height: 75%;
    margin: 5%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}

.monthsdiv {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 25%;
  text-align: center;
  margin-bottom: 2px;
  font-weight: bold;
  font-size:14px;
  color: #777;
}

/* Highlight the "current" day */
.monthsdiv.active {
  background-color: blue !important; 
  color: white !important;
}

.monthsdiv.periodSelectEndDark {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 0px 15px 15px 0px;
}

.monthsdiv.periodSelectStartLight {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 15px 0px 0px 15px;
}

.monthsdiv.periodSelectStartAndEndDark {
  background-color: #046d9e !important; 
  color: white !important;
}

.monthsdiv.periodSelectBetweenLight {
  background-color: #2ebcff !important; 
  color: white !important;
}

.monthsdiv.periodSelectStartDark {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 15px 0px 0px 15px;
}

    </style>
    `

    var left_1,left_2,left_3,left_4,left_5,left_6,left_7,left_8,left_9,left_10,left_11,left_12;
    var right_1,right_2,right_3,right_4,right_5,right_6,right_7,right_8,right_9,right_10,right_11,right_12;
    var YTDButton;
    var QTDButton;
    var MQTButton;
    var MATButton;
    var DetailButton;
    var SingleMonthButton;
    var currentYear = new Date().getFullYear();
    var nextbuttonText=null;
    var prevoiusbuttonText=null;
    var activeButton = null;
    var monthButtons;
    var months;
    var MP_MaxAllowedPeriodSelections=12;
    var gPeriodCharLength=0;
    var MP_gYMStartPeriod; //Holds the start period year range value in YM format
    var MP_gYMEndPeriod;
    var gStartPeriod; //holds the start period
    var gLimitPeriodSelection =false;
    var applyButton;
    var resetButton;
    var gEndPeriod;
    var gDisplayText; // holds the text in the display at bottom of the widget e.g 001.2023 - 007.2023 
    var gDateFormat = "MY";
    var popup;
    var closePopupButton;
    var popupBackground;

    class MonthPicker extends HTMLElement {
      constructor () {
        super()
  
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))

        this.addEventListener("click", event => {
          var event = new Event("onClick");
          this.dispatchEvent(event);
        });

        nextbuttonText = this._shadowRoot.getElementById('NextButtonText');
        prevoiusbuttonText = this._shadowRoot.getElementById('PreviousButtonText');

        YTDButton = this._shadowRoot.getElementById('YTDButton');
        YTDButton.addEventListener('click', function(){toggleOptionButton(YTDButton)});
        QTDButton = this._shadowRoot.getElementById('QTDButton');
        QTDButton.addEventListener('click', function(){toggleOptionButton(QTDButton)});
        MQTButton = this._shadowRoot.getElementById('MQTButton');
        MQTButton.addEventListener('click', function(){toggleOptionButton(MQTButton)});
        DetailButton = this._shadowRoot.getElementById('DETButton');
        DetailButton.addEventListener('click', function(){toggleOptionButton(DetailButton)});
        SingleMonthButton = this._shadowRoot.getElementById('MonthButton');
        SingleMonthButton.addEventListener('click', function(){toggleOptionButton(SingleMonthButton)});
        MATButton = this._shadowRoot.getElementById('MATButton');
        MATButton.addEventListener('click', function(){toggleOptionButton(MATButton)});

        gDisplayText= this._shadowRoot.getElementById('displayDates');

        //month buttons
        left_1= this._shadowRoot.getElementById('left_1');
        left_1.addEventListener('click', function(){buttonClicked(left_1)});
        left_2= this._shadowRoot.getElementById('left_2');
        left_2.addEventListener('click', function(){buttonClicked(left_2)});
        left_3= this._shadowRoot.getElementById('left_3');
        left_3.addEventListener('click', function(){buttonClicked(left_3)});
        left_4= this._shadowRoot.getElementById('left_4');
        left_4.addEventListener('click', function(){buttonClicked(left_4)});
        left_5= this._shadowRoot.getElementById('left_5');
        left_5.addEventListener('click', function(){buttonClicked(left_5)});
        left_6= this._shadowRoot.getElementById('left_6');
        left_6.addEventListener('click', function(){buttonClicked(left_6)});
        left_7= this._shadowRoot.getElementById('left_7');
        left_7.addEventListener('click', function(){buttonClicked(left_7)});
        left_8= this._shadowRoot.getElementById('left_8');
        left_8.addEventListener('click', function(){buttonClicked(left_8)});
        left_9= this._shadowRoot.getElementById('left_9');
        left_9.addEventListener('click', function(){buttonClicked(left_9)});
        left_10= this._shadowRoot.getElementById('left_10');
        left_10.addEventListener('click', function(){buttonClicked(left_10)});
        left_11= this._shadowRoot.getElementById('left_11');
        left_11.addEventListener('click', function(){buttonClicked(left_11)});
        left_12= this._shadowRoot.getElementById('left_12');
        left_12.addEventListener('click', function(){buttonClicked(left_12)});

        //month buttons
        right_1= this._shadowRoot.getElementById('right_1');
        right_1.addEventListener('click', function(){buttonClicked(right_1)});
        right_2= this._shadowRoot.getElementById('right_2');
        right_2.addEventListener('click', function(){buttonClicked(right_2)});
        right_3= this._shadowRoot.getElementById('right_3');
        right_3.addEventListener('click', function(){buttonClicked(right_3)});
        right_4= this._shadowRoot.getElementById('right_4');
        right_4.addEventListener('click', function(){buttonClicked(right_4)});
        right_5= this._shadowRoot.getElementById('right_5');
        right_5.addEventListener('click', function(){buttonClicked(right_5)});
        right_6= this._shadowRoot.getElementById('right_6');
        right_6.addEventListener('click', function(){buttonClicked(right_6)});
        right_7= this._shadowRoot.getElementById('right_7');
        right_7.addEventListener('click', function(){buttonClicked(right_7)});
        right_8= this._shadowRoot.getElementById('right_8');
        right_8.addEventListener('click', function(){buttonClicked(right_8)});
        right_9= this._shadowRoot.getElementById('right_9');
        right_9.addEventListener('click', function(){buttonClicked(right_9)});
        right_10= this._shadowRoot.getElementById('right_10');
        right_10.addEventListener('click', function(){buttonClicked(right_10)});
        right_11= this._shadowRoot.getElementById('right_11');
        right_11.addEventListener('click', function(){buttonClicked(right_11)});
        right_12= this._shadowRoot.getElementById('right_12');
        right_12.addEventListener('click', function(){buttonClicked(right_12)});

        
         monthButtons = [left_1,left_2,left_3,left_4,left_5,left_6,left_7,left_8,left_9,left_10,left_11,left_12,
          right_1,right_2,right_3,right_4,right_5,right_6,right_7,right_8,right_9,right_10,right_11,right_12];

          months = this._shadowRoot.getElementById('months');

        // monthButtons.addEventListener('click', (event) => {
        //   const isButton = event.target.tagName === 'LI';
        //   if (!isButton) {
        //     return;
        //   }
        
        //   console.log(event.target.id);
        // })
        

        
  
        this._root = this._shadowRoot.getElementById('column2');
        this._nextButton = this._shadowRoot.getElementById('NextButton').addEventListener("click", this._incrementYear.bind(this, this._shadowRoot.getElementById('NextButtonText'), this._shadowRoot.getElementById('PreviousButtonText')));
        

        //this._nextButton = this._shadowRoot.getElementById('NextButton').addEventListener("click", incrementYear(nextbuttonText,prevoiusbuttonText));
        
        
        
        this._previousButton = this._shadowRoot.getElementById('PreviousButton').addEventListener("click",  this._decrementYear.bind(this, this._shadowRoot.getElementById('NextButtonText'), this._shadowRoot.getElementById('PreviousButtonText')));
        

        //apply and reset buttons event listeners
        applyButton = this._shadowRoot.getElementById("ApplyButton").addEventListener("click",  this._submitApply.bind(this));
        resetButton = this._shadowRoot.getElementById("ResetButton").addEventListener("click",this._submitReset.bind(this));

        //pop up buttons  event listeners
        popup=this._shadowRoot.getElementById("popup");
        closePopupButton=this._shadowRoot.getElementById("closePopup").addEventListener('click', function(){closePopup()});
        popupBackground=this._shadowRoot.getElementById("popup-background");

        

        this._props = {};

        
        
  
        setDefaultTime();
        this.render()
        }

        _submitReset(e) {
          e.preventDefault();
          console.log("reset clicked");
          this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
              properties: {
                startPeriod: this.startPeriod,
                endPeriod:this.endPeriod,
                startMonth:this.startMonth,
                startYear:this.startYear,
                endMonth:this.endMonth,
                endYear:this.endYear,
                selectedAction:"Reset",
               // selectedTimeFrame: activeButton.id
              }
            }
        }));
          
        }

        //called when subit button is clicked
        _submitApply(e) {
          e.preventDefault();

          if (gDisplayText==="Select dates" || gEndPeriod==="select end" || gEndPeriod===""){
            //display error popup 
            showPopup();
          }else{
          this.dispatchEvent(new CustomEvent("propertiesChanged", {
              detail: {
                properties: {
                  startPeriod: this.startPeriod,
                  endPeriod:this.endPeriod,
                  startMonth:this.startMonth,
                  startYear:this.startYear,
                  endMonth:this.endMonth,
                  endYear:this.endYear,
                  selectedAction:"Apply",
                 // selectedTimeFrame: activeButton.id
                }
              }
          }));
        }
        }
    
        get startPeriod() {
          return gStartPeriod;
        }

        get endPeriod() {
          return gEndPeriod;
        }
        get startMonth() {
          return getMonth(gStartPeriod);
        }

        get endMonth() {
          return getMonth(gEndPeriod);
        }
        get startYear() {
          return getYear(gStartPeriod);
        }

        get endYear() {
          return getYear(gEndPeriod);
        }
        // set startPeriod(newstartPeriod) {
        //   console.log("Set Start Period");
        //   this.startPeriod = newstartPeriod;
        // }
    
        // get startPeriod() {
        //   console.log("get Start Period");
        //   console.log(gStartPeriod);
        //   console.log("---------------.");
        //   return gStartPeriod;
        // }

        // onCustomWidgetBeforeUpdate(changedProperties) {
        //   this._props = { ...this._props, ...changedProperties };
        //   }

        //   onCustomWidgetAfterUpdate(changedProperties) {
        //     if ("startPeriod" in changedProperties) {
        //       gStartPeriod = changedProperties["startPeriod"];
        //       //this._col2style.style["background-color"] = changedProperties["color"];
        //       //this._col3style.style["background-color"] = changedProperties["color"];
        //     }
        //   }

        onCustomWidgetBeforeUpdate(changedProperties) {
          this._props = { ...this._props, ...changedProperties };
        }
    
        onCustomWidgetAfterUpdate(changedProperties) {
          if ("color" in changedProperties) {
           // applybutton.style["background-color"] = changedProperties["color"];
          }
          if ("startPeriod" in changedProperties) {
            console.log("Start period in changed properties: "+changedProperties["startPeriod"]);
            gStartPeriod=changedProperties["startPeriod"];
            setCSSBetween();
          }
          if ("endPeriod" in changedProperties) {
            console.log("end period in changed properties: "+changedProperties["endPeriod"]);
            gEndPeriod=changedProperties["endPeriod"];
            setCSSBetween();
          }
          // if ("selectedTimeFrame" in changedProperties) {
          //   var temp;
          //   console.log("selectedTimeFramein changed properties: "+changedProperties["selectedTimeFrame"]);
          //   temp=changedProperties["selectedTimeFrame"];
          //   console.log(temp);
          //   //setCSSBetween();
          // }
          
        }

        //increases the year range by one
       
      // decreases the year range by one
      _decrementYear(next, previous){
        console.log(next.innerText);
        console.log(previous.innerText)
        console.log(currentYear);
        currentYear = currentYear-1;
        next.innerText = currentYear;
        previous.innerText =currentYear-1;
        clearPeriodCSS();
        yearButtonCSS();
        toggleLimitPeriodSelection();
      }

      _incrementYear(next, previous){
        console.log(currentYear);
        currentYear = currentYear+1;
        next.innerText = currentYear;
        previous.innerText = currentYear-1;
        clearPeriodCSS();
        yearButtonCSS();
        toggleLimitPeriodSelection();
        }
  
      onCustomWidgetResize (width, height) {
        this.render()
      }
  
      async render () { 
        //this.dispose()
      }
  
      dispose () {
        
      }
    }

      // function updateChnangeValues(){
      //   console.log("apply clciked");
      //   console.log(gStartPeriod);
      //   console.log("---------");
      //   console.log(this.startPeriod);
      //   console.log("---------");
      //   this.dispatchEvent(new CustomEvent("propertiesChanged", {
      //     detail: {
      //       properties: {
      //         gStartPeriod: "001.2022" 
      //       }
      //     }
      // }));
      // }


      function toggleOptionButton(button1) {
        clearSelections();
      if (activeButton !== null) {
        activeButton.classList.remove("active");
      }

      if (activeButton !== button1) {
        button1.classList.add("active");
        activeButton = button1;
      } else {
        activeButton = null;
      }
    }

    function buttonClicked(ButtonName){
      console.log(ButtonName);
      console.log("gstart period = "+gStartPeriod);//should be period to date
      if(activeButton.id ==="MonthButton"){
        setSinglePeriod(ButtonName);
        setDateText();
      }
      else if(activeButton.id ==="YTDButton"){
        changeState_YTD(ButtonName);
      }
      else if(activeButton.id ==="MQTButton"){
        changeState_MQT(ButtonName);
        setDateText();
      }
      else if(activeButton.id ==="QTDButton"){
        changeState_QTD(ButtonName);
        setDateText();
      }
      else if(activeButton.id ==="DETButton"){
        if (MP_MaxAllowedPeriodSelections === 1) {
          // set the max allowed weeks param to 0 to prevent a call loop
          MP_MaxAllowedPeriodSelections = 0;
          MP_Scripts.setSinglePeriod(thisButton);
          // now set it back again to 1
          MP_MaxAllowedPeriodSelections = -1;
        } else {
          console.log("active button is det");
        changeState(ButtonName);
        setDateText();
        }
      }
      else if(activeButton.id ==="MATButton"){
        changeState_MAT(ButtonName);
        setDateText();
      };
      
      
      //console.log(ButtonName);
      //ButtonName.style.backgroundColor = "blue";
    }

    //called when the active button is Detail. called from function buttonClicked
    function setSinglePeriod(thisButton){
      gStartPeriod = getSelectedPeriod(thisButton);
      var delimiterPosition = gStartPeriod.indexOf(".");
      gEndPeriod = getSelectedPeriod(thisButton);


      MP_gYMStartPeriod = gStartPeriod.substring(delimiterPosition + 1, gStartPeriod.length) + "." + gStartPeriod.substring(0,delimiterPosition);	
      MP_gYMEndPeriod = gEndPeriod.substring(delimiterPosition + 1, gEndPeriod.length) + "." + gEndPeriod.substring(0, delimiterPosition);	

      var populatedPeriods = checkPopulatedPeriods();

      if (populatedPeriods === "both") { // <-- start is populated so fill end
        clearPeriodCSS();
        thisButton.classList.add("periodSelectStartAndEndDark");
        // fill in css for between periods
        setDateText();
      }
    }

    function changeState_MAT(thisButton){
      clearPeriodCSS();

      //end period = last month 
      gEndPeriod = getSelectedPeriod(thisButton);
      console.log("end per"+gEndPeriod);

      gStartPeriod = "01" + "." + gEndPeriod.split(".")[1];


      var period = parseInt(gEndPeriod.split(".")[0]);
      var year = parseInt(gEndPeriod.split(".")[1]);

      if (period === 12) 
      {
        gStartPeriod = "001" + "." + (year).toString();
      } 
      else 
      {
        gStartPeriod = "00" +  (period + 1).toString() + "." + (year - 1).toString();
      //	gStartPeriod = gStartPeriod.substring(gStartPeriod.length - gPeriodCharLength);
      }
      var delimiterPosition = gStartPeriod.indexOf(".");

      MP_gYMStartPeriod = gStartPeriod.substring(delimiterPosition + 1, gStartPeriod.length) + "." + gStartPeriod.substring(0, delimiterPosition);	
      MP_gYMEndPeriod = gEndPeriod.substring(delimiterPosition + 1, gEndPeriod.length) + "." + gEndPeriod.substring(0, delimiterPosition);	

      //APPLICATION.createErrorMessage(gStartPeriod + "->" + gEndPeriod);

      var populatedPeriods = checkPopulatedPeriods();

      if (populatedPeriods === "both") 
      {
        // <-- start is populated so fill end

        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        setDateText();
        fillBetweenCSS();
      }
    }

    //function to change the state of the month picker to accomodate YTD selections
    function changeState_YTD(thisButton){
      //clear all the css 
      clearPeriodCSS(); 

      gEndPeriod=getSelectedPeriod(thisButton);
      console.log("gEndPeriod -- "+gEndPeriod);

      gStartPeriod = ("001" + "." + gEndPeriod.split(".")[1]);
      gStartPeriod = gStartPeriod.substring(gStartPeriod.length, gPeriodCharLength);
      var delimiterPosition = gStartPeriod.indexOf(".");

      MP_gYMStartPeriod = gStartPeriod.substring(delimiterPosition + 1, gStartPeriod.length) + "." + gStartPeriod.substring(0, delimiterPosition);	
      

      //sets the css of the start month
      if (thisButton.id.includes("right")) {
        right_1.classList.add("periodSelectStartLight");
        //RightButton_1_MP.setCssClass("periodSelectStartLight");
      } else {
        left_1.classList.add("periodSelectStartLight");
        //LeftButton_1_MP.setCssClass("periodSelectStartLight");
      }
      var populatedPeriods = checkPopulatedPeriods();

      if (populatedPeriods === "both") {
        // <-- start is populated so fill end
      
        //thisButton.setCssClass("periodSelectEndDark");
        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        setDateText();
        fillBetweenCSS();
      }

    }

    //function to change the state of the month picker to accomodate MQT selections
    function changeState_MQT(thisButton){
      //clear all the css 
      clearPeriodCSS(); 
      gEndPeriod  = getSelectedPeriod(thisButton);
      console.log(gEndPeriod+" - end period ");

      var period = parseInt(gEndPeriod.split(".")[0]);
      var year = parseInt(gEndPeriod.split(".")[1]);

      if(period>=3){
        gStartPeriod = "00" + (period -2).toString() + "." + (year).toString();
      }else{
        var temp=0;
        if(period===1){
          temp=1;
        }else if(period===2){
          temp=0;
        }
        gStartPeriod = "00" + (12 -temp).toString() + "." + (year-1).toString();
      }

      console.log(gStartPeriod+" - start period ");

      gStartPeriod = gStartPeriod.substring(gStartPeriod.length, gPeriodCharLength);
      gEndPeriod = gEndPeriod.substring(gEndPeriod.length, gPeriodCharLength);

      console.log(gStartPeriod+" - start period 2");
      console.log(gEndPeriod+" - end period 2");

      var populatedPeriods = checkPopulatedPeriods();
      console.log(populatedPeriods);

      if (populatedPeriods === "both") {
        // <-- start is populated so fill end
        console.log("both populted");

        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        setDateText();
        fillBetweenCSS();
      }
    }

    function changeState_QTD(thisButton){
      clearPeriodCSS();

      var buttonName = thisButton.id;
      var year="";
      var selectedPeriod = parseInt(buttonName.split("_")[1]);

      
      if (buttonName.indexOf("left") !== -1){
        year = prevoiusbuttonText.innerText || prevoiusbuttonText.textContent
      } else {
          year = nextbuttonText.innerText || nextbuttonText.textContent
      }

      if(selectedPeriod>=1 && selectedPeriod<=3){
        gStartPeriod = "00" + "1" + "." + year;
        gEndPeriod = "00" + "3" + "." + year;
      }else if(selectedPeriod>=4 && selectedPeriod<=6){
        gStartPeriod = "00" + "4" + "." + year;
        gEndPeriod = "00" + "6" + "." + year;
      }else if(selectedPeriod>=7 && selectedPeriod<=9){
        gStartPeriod = "00" + "7" + "." + year;
        gEndPeriod = "00" + "9" + "." + year;
      }else if(selectedPeriod>=10 && selectedPeriod<=12){
        gStartPeriod = "00" + "10" + "." + year;
        gEndPeriod = "00" + "12" + "." + year;
      }

      gStartPeriod = gStartPeriod.substring(gStartPeriod.length, gPeriodCharLength);
      gEndPeriod = gEndPeriod.substring(gEndPeriod.length, gPeriodCharLength);

      var populatedPeriods = checkPopulatedPeriods();

      if (populatedPeriods === "both") {
        // <-- start is populated so fill end
        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        setDateText();
        fillBetweenCSS();
      }

    }

    function changeState(thisButton){
      var delimiterPosition = gStartPeriod.indexOf(".");

      var populatedPeriods = checkPopulatedPeriods();

      console.log("populated periods ="+populatedPeriods);


      if (populatedPeriods === "both") 
      {
        // <-- both are populated so start again
        // clear the variables, the selection text, reset the CSS and the next CSS class to be applied
        clearPeriodCSS();
        gStartPeriod = getSelectedPeriod(thisButton);
        delimiterPosition = gStartPeriod.indexOf(".");
        gEndPeriod = "";
        MP_gYMStartPeriod = gStartPeriod.substring(delimiterPosition + 1, gStartPeriod.length) + "." + gStartPeriod.substring(0, delimiterPosition);	
        MP_gYMEndPeriod = "";
        thisButton.classList.add("periodSelectStartDark");
      } 
      else if (populatedPeriods === "start") 
      {
        // <-- start is populated so fill end
        thisButton.classList.add("periodSelectEndDark")
        gEndPeriod = getSelectedPeriod(thisButton);
        delimiterPosition = gEndPeriod.indexOf(".");
        MP_gYMEndPeriod = gEndPeriod.substring(delimiterPosition + 1, gEndPeriod.length) + "." + gEndPeriod.substring(0, delimiterPosition);	
        
        // fill in css for between periods
        setDateText();
        fillBetweenCSS();
      } 
      else if (populatedPeriods === "") 
      {
        // <-- nothing is populated so start again
        gStartPeriod = getSelectedPeriod(thisButton);
        delimiterPosition = gStartPeriod.indexOf(".");
        MP_gYMStartPeriod = gStartPeriod.substring(delimiterPosition + 1, gStartPeriod.length) + "." + gStartPeriod.substring(0,delimiterPosition);	
        thisButton.classList.add("periodSelectStartDark");
      }
      toggleLimitPeriodSelection();

    }

  
    //formats the period into the right format depedning on the button picked 
    function getSelectedPeriod(thisButton){
      var buttonName = thisButton.id;
      console.log(buttonName);
      var selectedPeriod = buttonName.split("_")[1];
      var year = "";
      var periodYear = "";

      if (buttonName.indexOf("left") !== -1){
        year = prevoiusbuttonText.innerText || prevoiusbuttonText.textContent
      } else {
          year = nextbuttonText.innerText || nextbuttonText.textContent
      }

      periodYear = "00" + selectedPeriod + "." + year;
      periodYear = periodYear.substring(periodYear.length, gPeriodCharLength);
      //APPLICATION.createErrorMessage(buttonName + " - " + periodYear);

      return periodYear;
    }

    function checkPopulatedPeriods(){
      var result = "";


        if (gStartPeriod !== "" && gEndPeriod !== "") {
          result = "both";
        } else if (gEndPeriod !== "") {
          result = "end";
        } else if (gStartPeriod !== "") {
          result = "start";
        } else {
          result = "";
        }

        return result;
    }

//uncomment the DatesPickedText_MP code. this is the reference to the bottom text component 
    function setDateText(){
      var populatedPeriods = checkPopulatedPeriods();
      console.log(" setatetext() gstart period = "+gStartPeriod);

      console.log("populate periods in setdatetext = "+populatedPeriods);

      if (populatedPeriods === "both") 
      {
        if (gDateFormat === "MY") {
         // DatesPickedText_MP.applyText(gStartPeriod + "  ->  " + gEndPeriod);
        } else {
        //  DatesPickedText_MP.applyText(gYMStartPeriod + "  ->  " + gYMEndPeriod);
        }
        gDisplayText.innerText = gStartPeriod + "  ->  " + gEndPeriod;
      } 
      else if (populatedPeriods === "start") 
      {
        if (gDateFormat === "MY") {
        //  DatesPickedText_MP.applyText(gStartPeriod + "  ->  " + "select end");
        } else {
        //  DatesPickedText_MP.applyText(gYMStartPeriod + "  ->  " + "select end");
        }
        gDisplayText.innerText = gStartPeriod + "  ->  " + "select end";
      } 
      else if (populatedPeriods === "") 
      {
        //DatesPickedText_MP.applyText("Select Dates...");
        gDisplayText.innerText = "Select Dates...";
      } 

    }

    function fillBetweenCSS(){
      console.log("fill between");

      var startPeriod = parseInt(gStartPeriod.split(".")[0]);
      var startYear = parseInt(gStartPeriod.split(".")[1]);

      var endPeriod = parseInt(gEndPeriod.split(".")[0]);
      var endYear = parseInt(gEndPeriod.split(".")[1]);

      var delimiterPosition = gStartPeriod.indexOf(".");
      var startZero = "0";
      var endZero = "0";

      if (startPeriod >= 10) {
        startZero = "";
      }
      
      if (endPeriod >= 10) {
        endZero = "";
      }

      var intStartPeriod = parseInt((startYear).toString() + startZero + (startPeriod).toString());
      var intEndPeriod = parseInt((endYear).toString() + endZero + (endPeriod).toString());

      var temp = "";

      // swap start and end if out of order
      if (intStartPeriod > intEndPeriod) {
        temp = gStartPeriod;
        gStartPeriod = gEndPeriod;
        gEndPeriod = temp;
      }

      setDateText();

      if (activeButton.id === "DETButton"){
        setCSSBetween();
      } else if (activeButton.id === "YTDButton"){
        setCSSBetween_YTD();
      } else if (activeButton.id === "MATButton"){
        setCSSBetween_MAT();
      }else if (activeButton.id === "QTDButton"){
        setCSSBetween();
      }else if(activeButton.id === "MQTButton"){
        setCSSBetween();
      }
    }

    function setCSSBetween_MAT(){

      var leftYear = parseInt(prevoiusbuttonText.innerText);
      var rightYear = parseInt(nextbuttonText.innerText);

      var startYear = parseInt(
        gDisplayText.innerText.split(" -> ")[0].split(".")[1]
      );
      var endYear = parseInt(
        gDisplayText.innerText.split(" -> ")[1].split(".")[1]
      );


      var startPeriod = parseInt(
        gDisplayText.innerText.split(" -> ")[0].split(".")[0]
      );
      var endPeriod = parseInt(
        gDisplayText.innerText.split(" -> ")[1].split(".")[0]
      );

      var leftAction = "";
      var rightAction = "";

      if (leftYear === startYear && leftYear === endYear) {
        leftAction = "both";
      } else if (leftYear === startYear) {
        leftAction = "start";
      } else if (leftYear === endYear) {
        leftAction = "end";
      } else {
        leftAction = "nothing";
      }

      if (rightYear === startYear && rightYear === endYear) {
        rightAction = "both";
      } else if (rightYear === startYear) {
        rightAction = "start";
      } else if (rightYear === endYear) {
        rightAction = "end";
      } else {
        rightAction = "nothing";
      }



      for(var i=0;i<monthButtons.length;i++) {
      var temp = monthButtons[i].id;
        var buttonPeriod = parseInt(temp.split("_")[1]);
        if (temp.indexOf("left") !== -1) {
          if (leftAction === "start") {
            if (buttonPeriod < startPeriod) {
            //  gButtonArray[i].setCssClass("");
            } else if (buttonPeriod === startPeriod) {
              //monthButtons[i].setCssClass("periodSelectStartLight");
              monthButtons[i].classList.add("periodSelectStartLight");
            } else if (buttonPeriod > startPeriod) {
              //monthButtons[i].setCssClass("periodSelectBetweenLight");
              monthButtons[i].classList.add("periodSelectBetweenLight");
            }
          } else if (leftAction === "end") {
            if (buttonPeriod < endPeriod) {
              //monthButtons[i].setCssClass("periodSelectBetweenLight");
              monthButtons[i].classList.add("periodSelectBetweenLight");
            } else if (buttonPeriod === endPeriod) {
              //monthButtons[i].setCssClass("periodSelectEndDark");
              monthButtons[i].classList.add("periodSelectEndDark");
            } else if (buttonPeriod > endPeriod) {
            // gButtonArray[i].setCssClass("");
            }
          } else if (leftAction === "both") {
            if (buttonPeriod === 1) {
              //monthButtons[i].setCssClass("periodSelectStartLight");
              monthButtons[i].classList.add("periodSelectStartLight");
            } else if (buttonPeriod === 12) {
             // monthButtons[i].setCssClass("periodSelectEndDark");
             monthButtons[i].classList.add("periodSelectEndDark");
            } else {
              //monthButtons[i].setCssClass("periodSelectBetweenLight");
              monthButtons[i].classList.add("periodSelectBetweenLight");
            }
          }
        } else {
          if (rightAction === "start") {
            if (buttonPeriod < startPeriod) {
            //  gButtonArray[i].setCssClass("");
            } else if (buttonPeriod === startPeriod) {
              //monthButtons[i].setCssClass("periodSelectStartLight");
              monthButtons[i].classList.add("periodSelectStartLight");
            } else if (buttonPeriod > startPeriod) {
              //monthButtons[i].setCssClass("periodSelectBetweenLight");
              monthButtons[i].classList.add("periodSelectBetweenLight");
            }
          } else if (rightAction === "end") {
            if (buttonPeriod < endPeriod) {
              //monthButtons[i].setCssClass("periodSelectBetweenLight");
              monthButtons[i].classList.add("periodSelectBetweenLight");
            } else if (buttonPeriod === endPeriod) {
              //monthButtons[i].setCssClass("periodSelectEndDark");
              monthButtons[i].classList.add("periodSelectEndDark");
            } else if (buttonPeriod > endPeriod) {
            // gButtonArray[i].setCssClass("");
            }
          } else if (rightAction === "both") {
            if (buttonPeriod === 1) {
              //monthButtons[i].setCssClass("periodSelectStartLight");
              monthButtons[i].classList.add("periodSelectStartLight");
            } else if (buttonPeriod === 12) {
             // monthButtons[i].setCssClass("periodSelectEndDark");
             monthButtons[i].classList.add("periodSelectEndDark");
            } else {
             // monthButtons[i].setCssClass("periodSelectBetweenLight")
             monthButtons[i].classList.add("periodSelectBetweenLight");
            }
          }
        }
      }

    }

    function setCSSBetween_SinglePeriod(){

      var period = gEndPeriod.split(".")[0];
      var year = parseInt(gEndPeriod.split(".")[1]);
      var leftYear = parseInt(prevoiusbuttonText.innerText);
      var rightYear = parseInt(nextbuttonText.innerText);

      console.log("test Single Period");
      console.log(period);
      console.log(year);
      console.log(leftYear);
      console.log(rightYear);


      if (leftYear === year) {
      for(var i=0; i<monthButtons.length; i++){
        var temp = monthButtons[i].id;
        if(parseInt(temp.split("_")[1]) === parseInt(period) && temp.includes("left")){
          monthButtons[i].classList.add("periodSelectStartAndEndDark");
          }
        }	
      } else if (rightYear === year) {
      //	APPLICATION.createErrorMessage("right match");
        for(var j=0; j<monthButtons.length; j++){
          var temp2 = monthButtons[j].id;
          if ( parseInt(temp2.split("_")[1]) === parseInt(period)&& temp2.includes("right")) {
          monthButtons[j].classList.add("periodSelectStartAndEndDark");
          }
        }
      }else {
        // do nothing
      }
    }


    function setCSSBetween_YTD(){
      var period = gEndPeriod.split(".")[0];
      var year = gEndPeriod.split(".")[1];

      var buttonString = "none";

      if (prevoiusbuttonText.innerText === year) {
        buttonString = "left";
      } else if (nextbuttonText.innerText === year) {
        buttonString = "right";
      }

      for(var i =0; i<monthButtons.length; i++){
        var temp = monthButtons[i].id;
        
        if(temp.indexOf(buttonString) !== -1 && parseInt(period) === 1 && parseInt(temp.split("_")[1]) === 1){		
          monthButtons[i].classList.add("periodSelectStartAndEndDark");
        }else if (
          temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && parseInt(temp.split("_")[1]) === 1
          ){
          monthButtons[i].classList.add("periodSelectStartLight");
          }else if (
          temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && parseInt(temp.split("_")[1]) > parseInt(period)
          ){
         //gButtonArray[i].setCssClass("");
          } else if (
          temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && parseInt(temp.split("_")[1]) !== parseInt(period)
        ) {
          monthButtons[i].classList.add("periodSelectBetweenLight");
        } else if (
          temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && parseInt(temp.split("_")[1]) === parseInt(period)
        ) {
          monthButtons[i].classList.add("periodSelectEndDark");
        } else {
      //   gButtonArray[i].setCssClass("");
        }
      }
      

    }

    //sets the css between MQT and QTD
    function setCSSBetween(){
      clearPeriodCSS();
      setDateText();

      console.log("gDisplayText.innerText.... "+gDisplayText.innerText);

      if(gDisplayText.innerText!=="Select Dates..."){
        var startPeriodSelection = gDisplayText.innerText.split(" -> ")[0];
        var endPeriodSelection = gDisplayText.innerText.split(" -> ")[1];
        startPeriodSelection=startPeriodSelection.trim();

        var startYear = "";
        var startPeriod = "";
        var endYear = "";
        var endPeriod = "";
        var action = "";

        var startButtonString = "none";
        var endButtonString = "none";

        if (endPeriodSelection === "select end") {
           // just do the start CSS assignment
          startYear = startPeriodSelection.split(".")[1];
          startPeriod = startPeriodSelection.split(".")[0];
          endYear = "";
          endPeriod = "";
          action = "start";

          if (prevoiusbuttonText.innerText === startYear) {
            startButtonString = "left";
          } else if (nextbuttonText.innerText === startYear) {
            endButtonString = "right";
          }
        }else{
            startYear = startPeriodSelection.split(".")[1];
            startPeriod = startPeriodSelection.split(".")[0];
            endYear = endPeriodSelection.split(".")[1];
            endPeriod = endPeriodSelection.split(".")[0];
            action = "both";

            if (prevoiusbuttonText.innerText.includes(startYear)) {
              startButtonString = "left";
            } else if (nextbuttonText.innerText.includes(startYear)) {
              startButtonString = "right";
            }
            if (nextbuttonText.innerText === endYear) {
              endButtonString = "right";
            } else if (prevoiusbuttonText.innerText === endYear) {
              endButtonString = "left";
            }

            if (action === "start") {
              for(var i=0;i<monthButtons.length;i++){
                var temp2 = monthButtons[i].id;
                if(temp2.includes(startButtonString) && parseInt(temp2.split("_")[1]) === parseInt(startPeriod)) {
                  monthButtons[i].classList.add("periodSelectStartDark");
                  }else {
                    monthButtons[i].className = "monthsdiv"; //might be different code ??
                  }
              }
            }else if(action === "both") {
              for (var j=0;j<monthButtons.length;j++){	
                var temp =  monthButtons[j].id;
                 if (monthButtons[j].className === "periodSelectableBold") {
                  monthButtons[j].className = "monthsdiv";
                }	
                if (
                  temp.includes(startButtonString) &&
                  parseInt(temp.split("_")[1]) === parseInt(startPeriod) &&
                  startPeriodSelection === endPeriodSelection
                ){
                   monthButtons[j].classList.add("periodSelectStartAndEndDark");
                 }else if (
                   temp.includes(startButtonString) &&
                  parseInt( temp.split("_")[1]) === parseInt(startPeriod)
                ){
                   monthButtons[j].classList.add("periodSelectStartDark");
                } else if (
                  temp.includes(endButtonString) &&
                  parseInt(temp.split("_")[1]) === parseInt(endPeriod)
                ){
                   monthButtons[j].classList.add("periodSelectEndDark");
                }else if (
                  parseInt(prevoiusbuttonText.innerText) > parseInt(startYear) &&
                 parseInt(prevoiusbuttonText.innerText) < parseInt(endYear) &&
                   temp.includes("left")
                ){
                   monthButtons[j].classList.add("periodSelectBetweenLight");
                }else if (
                  parseInt(nextbuttonText.innerText) > parseInt(startYear) &&
                  parseInt(nextbuttonText.innerText) < parseInt(endYear) &&
                   temp.includes("right")
                ){
                   monthButtons[j].classList.add("periodSelectBetweenLight");
                }else if (
                   temp.includes(startButtonString) &&
                  parseInt(startYear) === parseInt(endYear) && 
                  parseInt(temp.split("_")[1]) > parseInt(startPeriod) &&
                  parseInt(temp.split("_")[1]) < parseInt(endPeriod)
                ){
                   monthButtons[j].classList.add("periodSelectBetweenLight");
                }else if (
                   temp.includes(startButtonString) &&
                  parseInt(startYear) !== parseInt(endYear) &&
                 parseInt(temp.split("_")[1]) > parseInt(startPeriod)
                ){
                   monthButtons[j].classList.add("periodSelectBetweenLight");
                } else if (
                  temp.includes(endButtonString)&&
                  parseInt(startYear) !== parseInt(endYear) &&
                  parseInt(temp.split("_")[1]) < parseInt(endPeriod)
                ){
                   monthButtons[j].classList.add("periodSelectBetweenLight");
                }
              }

        }

      }

    }
    } //end function

    //sets what buttons can and cant be clicked then the option is Deatil. max of 12 months left or right of chosen month can be selected 
    function toggleLimitPeriodSelection(){

      console.log("toggleLimitPeriodSelection");
      console.log(activeButton);
      console.log(MP_MaxAllowedPeriodSelections);
      console.log(gStartPeriod);
      console.log(gEndPeriod);

      if (activeButton.id === "DETButton" && MP_MaxAllowedPeriodSelections > 0 && gStartPeriod !== "" && gEndPeriod === "") {
        gLimitPeriodSelection = true;
        console.log("toggleLimitPeriodSelection true");
      }
    else{
      gLimitPeriodSelection = false;
      enableAllPeriods();
      console.log("toggleLimitPeriodSelection false");
      }
    
    
    if (gLimitPeriodSelection === true) {

      console.log("toggleLimitPeriodSelection is true");
      // enable everything then disable what is not allowed
      enableAllPeriods();
      
      var yearPeriodArray = calcMonthsYears(MP_MaxAllowedPeriodSelections);
      var minMaxPeriodArray = calcPeriodOffset(gStartPeriod, yearPeriodArray[0], yearPeriodArray[1]);
      var minAllowedPeriodYear = minMaxPeriodArray[0];
      var maxAllowedPeriodYear = minMaxPeriodArray[1];
      var sMinYear = minAllowedPeriodYear.split(".")[1];
      var sMinPeriod = "0" + minAllowedPeriodYear.split(".")[0];
      
      
      sMinPeriod = sMinPeriod.substring(sMinPeriod.length - 2, sMinPeriod.length);
      
      var iMinYearPeriod =  parseInt((sMinYear + sMinPeriod));
      var sMaxYear = maxAllowedPeriodYear.split(".")[1];
      var sMaxPeriod = "0" + maxAllowedPeriodYear.split(".")[0];
      
      sMaxPeriod = sMaxPeriod.substring(sMaxPeriod.length - 2, sMaxPeriod.length);
      
      var iMaxYearPeriod = parseInt(sMaxYear + sMaxPeriod);
      var sSelectedPeriod = "0" + gStartPeriod.split(".")[0];
      
      sSelectedPeriod = sSelectedPeriod.substring(sSelectedPeriod.length - 2, sSelectedPeriod.length);
    
      
      for(var i=0;i<monthButtons.length; i++){
        var elementYear = "";
          var elementPeriod = "0" + monthButtons[i].id.split("_")[1];
           var elementYearPeriod = 0;
        
        if (monthButtons[i].id.indexOf("left") !== -1) {
              elementYear = prevoiusbuttonText.innerText;
          } else{
              elementYear = nextbuttonText.innerText;
           }
      
         elementPeriod = elementPeriod.substring(elementPeriod.length - 2, elementPeriod.length);
          elementYearPeriod = parseInt(elementYear + elementPeriod);
    
    
         if (elementYearPeriod > iMinYearPeriod && elementYearPeriod < iMaxYearPeriod) {
              monthButtons[i].style.visibility = 'visible';
                if (/*monthButtons[i].getCssClass() === ""*/monthButtons[i].className==="") {
                  //monthButtons[i].setCssClass("periodSelectableBold2");
                  monthButtons[i].classList.add("");
                }
          }else{
            monthButtons[i].style.visibility = 'hidden';
          }
      }
    }
    }

    function calcPeriodOffset(periodYear, numYears, numPeriods){
      var result = [""];
      result.pop();

      var year = parseInt(periodYear.split(".")[1]);
      var period = parseInt(periodYear.split(".")[0]);

      var maxYear = year + numYears;
      var minYear = year - numYears;

      var maxPeriod = period + numPeriods;
      var minPeriod = period - numPeriods;

      if (maxPeriod > 12) {
        maxPeriod = maxPeriod - 12;
        maxYear = maxYear + 1;
      }

      if (minPeriod < 1) {
        if (minPeriod < 0) {
          minPeriod = minPeriod * -1;
        }
        minPeriod = 12 - minPeriod;
        minYear = minYear - 1;
      }

      var minPeriodYear = (minPeriod).toString() + "." +  (minYear).toString();
      var maxPeriodYear =  (maxPeriod).toString() + "." +  (maxYear).toString();

      //APPLICATION.createErrorMessage("startPeriodYear: " + periodYear);
      //APPLICATION.createErrorMessage("minPeriodYear: " + minPeriodYear);
      //APPLICATION.createErrorMessage("maxPeriodYear: " + maxPeriodYear);

      result.push(minPeriodYear);
      result.push(maxPeriodYear);


      return result;
    }

    function calcMonthsYears(numberOfMonths){
      var result = [0];

      result.pop();

      var years = 0;
      var months = 0;

      //numberOfMonths = numberOfMonths - 1;

      if (numberOfMonths >= 0) {
        years = Math.floor(numberOfMonths / 12);
        months = numberOfMonths - years * 12;
      }

      //APPLICATION.createErrorMessage("Years: " + years + " - Months:" + months);

      result.push(years);
      result.push(months);

      return result;
    }

    function enableAllPeriods(){
      for(var i=0;i<monthButtons.length;i++){
        monthButtons[i].style.visibility = 'visible';
      }
    }

    function setDefaultTime(){
      var endYear = "2023";
      var endMonth ="009";


      var startYear = "2023";
      var startMonth ="001";
     
      gDisplayText.innerText = startMonth+"."+startYear+" -> "+endMonth+"."+endYear;
      gStartPeriod=startMonth+"."+startYear;
      gEndPeriod=endMonth+"."+endYear;
      setCSSBetween();
    }



    function clearPeriodCSS(){
      //clear all the css 
      for(var i=0;i<monthButtons.length;i++){
        monthButtons[i].className = "monthsdiv";
        monthButtons[i].style.visibility= 'visible';
      }
    }

    function clearSelections(){
      clearPeriodCSS();
      gStartPeriod = "";
      gEndPeriod = "";
      gDisplayText.innerText = "Select dates...";
      //DatesPickedText_MP.applyText("Select dates...");
    }

    function yearButtonCSS(){
      clearPeriodCSS();

      if (activeButton.id === "MATButton") {
        setCSSBetween_MAT();
      } else if (activeButton.id === "YTDButton") {
        setCSSBetween_YTD();
      } else if (activeButton.id === "DETButton") {
        setCSSBetween();
      } else if (activeButton.id === "MonthButton") {
        setCSSBetween_SinglePeriod();
      }else if (activeButton.id === "QTDButton") {
        setCSSBetween();
      }else if (activeButton.id === "MQTButton") {
        setCSSBetween();
      }
    }

    function getMonth(startperiod){
      var result="";
      var inputString = startperiod;
      var regex = /(.{3})\./; // This regex captures the first 3 characters before a dot (.)

      var match = inputString.match(regex);

      if (match) {
        result = match[1]; // Get the first captured group
      } else {
        console.log("No match found.");
      }
      return result;
    }

    function getYear(endperiod){
      var result="";
      var inputString = endperiod;
      var regex = /\.(.{4})/; // This regex matches a period followed by any 4 characters

      var match = regex.exec(inputString);

      if (match) {
        result = match[1];
      } else {
        console.log("No match found.");
      }
      return result;
    }

    //functions to open and close popup when apply is selected but the dates are invalid
    function showPopup() {
      popup.style.display = "block";
      popupBackground.classList.add("visible")
    }

    function closePopup() {
        popup.style.display = "none";
        popupBackground.classList.remove("visible")
    }

   

    
       


  
    customElements.define('month-picker-main', MonthPicker)
  })()