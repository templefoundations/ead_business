
var CITY_SIZE = "19";
var CITY_MAX_SIZE = "19";

var amountToPatchindia = "94.00";
var amountToPatchforeign = "744.00";
var outSideIndia=0;
var arraySelectPOI = new Array(5);
var arraySelectPOA = new Array(5);
var otherThanIndividualPOA = new Array(5);
var otherThanIndividualPOI = new Array(5);

states = [
[
["", "-- Please select --"],
    ["1", "Andaman & Nicobar Islands"],
    ["2", "Andhra Pradesh"],
    ["3", "Arunachal Pradesh"],
    ["4", "Assam"],
    ["5", "Bihar"],
    ["6", "Chandigarh"],
    ["33", "Chhattisgarh"],
    ["7", "Dadra & Nagar Haveli"],
    ["8", "Daman & Diu"],
    ["9", "Delhi"],
    ["10", "Goa"],
    ["11", "Gujarat"],
    ["12", "Haryana"],
    ["13", "Himachal Pradesh"],
    ["14", "Jammu & Kashmir"],
    ["35", "Jharkhand"],
    ["15", "Karnataka"],
    ["16", "Kerala"],
    ["17", "Lakhswadeep"],
    ["18", "Madhya Pradesh"],
    ["19", "Maharashtra"],
    ["20", "Manipur"],
    ["21", "Meghalaya"],
    ["22", "Mizoram"],
    ["23", "Nagaland"],
    ["24", "Orissa"],
    ["25", "Pondicherry"],
    ["26", "Punjab"],
    ["27", "Rajasthan"],
    ["28", "Sikkim"],
    ["29", "Tamil Nadu"],
    ["30", "Tripura"],
    ["31", "Uttar Pradesh"],
    ["32", "West Bengal"],
    ["34", "Uttaranchal"],
    ["99", "Outside India"]
    ],
    [
    ["88", "Others"]
    ] 
    ];

    arraySelectPOI = [
    [
    ["", "-- Please select --"],
    ["001", "Copy of school leaving certificate"],
    ["002", "Copy of matriculation certificate"],
    ["003", "Copy of degree of a recognised educational institution"],
    ["004", "Copy of depository account transaction statement"],
    ["005", "Copy of bank account statement/passbook"],
    ["035", "Copy of credit card statement"],
    ["006", "Copy of water bill"],
    ["007", "Copy of ration card"],
    ["008", "Copy of property tax assessment order"],
    ["009", "Copy of passport"],
    ["010", "Copy of voter's identity card"],
    ["011", "Copy of driving license"],
    ["012", "Copy of certificate of identity signed by a Member of Parliament"],
    ["013", "Copy of certificate of identity signed by a Member Legislative Assembly"],
    ["014", "Copy of certificate of identity signed by a Municipal Councilor"],
    ["015", "Copy of certificate of identity signed by a Gazetted Officer"]
    ],

    [
    ["", "-- Please Select --"],
    ["009", "Copy of passport"]
    ],

    [
    ["", "-- Please Select --"],
    ["009", "Copy of passport"],
    ["036", "Copy of Person of Indian Origin (PIO) card issued by Government of India"]
    ],

    [
    ["", "-- Please Select --"],
    ["009", "Copy of passport"],
    ["033", "Copy of other National ID attested by Indian Embassy/Consulate/High Commission/Apostille"],
    ["036", "Copy of Person of Indian Origin (PIO) card issued by Government of India"]
    ],
    //If RA is M/s 
    [
    ["", "-- Please select --"],
    ["016", "Copy of Certificate of Registration issued by Registrar of Companies"],
    ["017", "Copy of Certificate of Registration issued by Registrar of Firms"],
    ["018", "Copy of partnership deed"],
    ["019", "Copy of trust deed"],
    ["020", "Copy of registration number issued by Charity Commissioner-[For AOP(T) only] "],
    ["021", "Copy of agreement"],
    ["022", "Copy of Certificate of registration number issued by Charity Commissioner"],
    ["023", "Copy of Certificate of registration number issued by Registrar of Co-operative societies"],
    ["024", "Copy of Certificate of registration number issued by any other competent authority"],
    ["025", "Any other document originating from any Central or State Government Department establishing identity of such person"]
    ]
    ];

    arraySelectPOA = [
    [   
    ["", "-- Please select --"],
    ["001", "Copy of electricity bill"],
    ["002", "Copy of telephone bill"],
    ["003", "Copy of depository account transaction statement"],
    ["004", "Copy of credit card statement"],
    ["005", "Copy of bank account statement/passbook"],
    ["006", "Copy of ration card"],
    ["007", "Copy of employer certificate"],
    ["008", "Copy of passport"],
    ["009", "Copy of voter`s identity card"],
    ["010", "Copy of property tax assessment order"],
    ["036", "Copy of driving license"],
    ["037", "Copy of rent receipt"],
    ["011", "Copy of certificate of address signed by a Member of Parliament"],
    ["012", "Copy of certificate of address signed by a Member of Legislative Assembly"],
    ["013", "Copy of certificate of address signed by a Municipal Councilor"],
    ["014", "Copy of certificate of address signed by a Gazetted Officer"]
    ],
    [
    ["", "-- Please select --"],
    ["008", "Copy of passport"],
    ["005", "Copy of bank account statement"],
    ["041", "Copy of NRE bank account statement"]
    ],
    [
    ["", "-- Please select --"],
    ["008", "Copy of passport"],
    ["005", "Copy of bank account statement"],
    ["038", "Copy of Residential permit issued by the State Police Authorities"],
    ["039", "Copy of Registration certificate issued by the Foreigner's Registration Officer"],
    ["040", "Copy of Person of Indian Origin (PIO) card issued by Government of India"],
    ["041", "Copy of NRE bank account statement"]
    ],
    [
    ["", "-- Please select --"],
    ["008", "Copy of passport"],
    ["029", "Copy of other National ID attested by Indian Embassy/Consulate/High Commission/Apostille"],
    ["035", "Copy of bank account statement in country of residence, duly attested by Indian Embassy/Consulate/High Commision/Apostille in the country where applicant is located"],
    ["040", "Copy of Person of Indian Origin (PIO) card issued by Government of India"],
    ["041", "Copy of NRE bank account statement"]
    ],

    // If RA is M/s 
    [
    ["", "-- Please select --"],
    ["015", "Copy of Certificate of Registration issued by Registrar of Companies"],
    ["016", "Copy of Certificate of Registration issued by Registrar of Firms"],
    ["017", "Copy of partnership deed"],
    ["018", "Copy of trust deed"],
    ["019", "Copy of registration number issued by Charity Commissioner-[For AOP(T) only]"],
    ["020", "Copy of agreement"],
    ["021", "Copy of Certificate of registration number issued by Charity Commissioner"],
    ["022", "Copy of Certificate of registration number issued by Registrar of Co-operative societies"],
    ["023", "Copy of Certificate of registration number issued by any other competent authority"],
    ["024", "Any other document originating from any Central or State Government Department establishing address of such person"]
    ]
    ];

    otherThanIndividualPOA = [   
    //office inside India
    [
    //Firms
    [ 
    ["", "-- Please select --"],
    ["016", "Copy of Certificate of Registration issued by Registrar of Firms"],
    ["017", "Copy of Partnership Deed"]
    ],
    //Company
    [
    ["", "-- Please select --"],
    ["015", "Copy of Certificate of Registration issued by Registrar of Companies"]
    ],
    //AOP(trust)
    [ 
    ["", "-- Please select --"],
    ["018", "Copy of Trust Deed"],
    ["019", "Copy of Certificate of Registration issued by Charity Commissioner"]
    ],
    //AOP/BOI/LA/AJP
    [ 
    ["", "-- Please select --"],
    ["020", "Copy of agreement"],
    ["021", "Copy of certificate of registration number issued by Charity Commissioner"],
    ["022", "Copy of certificate of registration number issued by Registrar of Co-operative societies"],
    ["023", "Copy of certificate of registration number issued by any other competent authority"],
    ["024", "Any other document originating from any Central or State Government Department establishing address of such person"]
    ]
    ],
    //office outside India  
    [
    [
    ["", "-- Please Select --"],
    ["030", "Copy of registration certificate of the respective country duly attested by Indian Embassy/ Consulate/ High Commission/ Apostille  in the country where applicant is located"],
    ["031", "Copy of certificate of registration with the competent authority in India"],
    ["032", "Copy of approval issued by the competent authority in India"],
    ["033", "Copy of the accompanying document alongwith the approval issued by competent authority in India"],
    ["034", "Copy of the application (duly acknowledged) made by the applicant before the competent authority in India"]
    ]
    ]
    ];               

    otherThanIndividualPOI = [   //office inside India  
    [
    //Firms
    [ 
    ["", "-- Please select --"],
    ["018", "Copy of Partnership Deed"],
    ["017", "Copy of Certificate of Registration issued by Registrar of Firms"]
    ],
    //Company
    [
    ["", "-- Please select --"],
    ["016", "Copy of Certificate of Registration issued by Registrar of Companies"]
    ],
    //AOP(trust)
    [ 
    ["", "-- Please select --"],
    ["019", "Copy of Trust Deed"],
    ["020", "Copy of Certificate of Registration issued by Charity Commissioner"]
    ],
    //AOP/BOI/LA/AJP
    [ 
    ["", "-- Please select --"],
    ["021", "Copy of agreement"],
    ["022", "Copy of certificate of registration number issued by Charity Commissioner"],
    ["023", "Copy of certificate of registration number issued by Registrar of Co-operative societies"],
    ["024", "Copy of certificate of registration number issued by any other competent authority"],
    ["025", "Any other document originating from any Central or State Government Department establishing identity of such person"]
    ]
    ],
    //office outside India  
    [
    [
    ["", "-- Please select --"],
    ["028", "Copy of registration certificate of the respective country duly attested by Indian Embassy/ Consulate/ High Commission/ Apostille in the country where applicant is located"],
    ["029", "Copy of certificate of registration with the competent authority in India"],
    ["030", "Copy of approval issued by the competent authority in India"],
    ["031", "Copy of the accompanying document alongwith the approval issued by competent authority in India"],
    ["032", "Copy of the application (duly acknowledged) made by the applicant before the competent authority in India"]
    ]
    ]
    ];


    //Indices for otherThanIndividualPOI when inside India

    var categoryIndex = new Array(15);
    categoryIndex["F"] = 0;
    categoryIndex["C"] = 1;
    categoryIndex["T"] = 2;
    categoryIndex["B"] = 3;
    categoryIndex["A"] = 3;
    categoryIndex["L"] = 3;
    categoryIndex["J"] = 3;
    categoryIndex["P"] = 5; //Individual
    categoryIndex["H"] = 5; //Individual HUF

    //Index for otherThanIndividualPOI when out side India
    // when office outside india then ignore category of otherThanIndividualPOI
    // and given a default category X
    categoryIndex["X"] = 0;

    function checkRAdetails() {
	var RAlastname = document.newPanApp.PAN_LST_NM_REP.value;
	var RAfirstname = document.newPanApp.PAN_FST_NM_REP.value;
	var RAaddr1 = document.newPanApp.PAN_REP_ADDR1.value;
	var RAaddr2 = document.newPanApp.PAN_REP_ADDR2.value;
	var RAaddr3 = document.newPanApp.PAN_REP_ADDR3.value;
	var RAaddr4 = document.newPanApp.PAN_REP_ADDR4.value;
	var RAstate = document.newPanApp.PAN_REP_STATE.value;

	if(RAlastname != "" || RAfirstname != "" || RAaddr1 != "" || RAaddr2 != "" || RAaddr3 != "" || RAaddr4 != "" || RAstate != ""){
	    return true;
	} else {
	    return false;
	}
    }

function isOutsideIndia() {
    var stateCodeRes="";
    var stateCodeOff = document.newPanApp.PAN_O_STATE.value;
    var cat = document.newPanApp.PAN_APPLCNT_STATUS.value;
    if (cat == "P" || cat == "B" || cat == "H" || cat == "A" || cat == "J") {
	stateCodeRes = document.newPanApp.PAN_R_STATE.value;
    }
    if (stateCodeRes == 99 || stateCodeOff == 99) {
	return "Y";
    } else {
	return "N";
    }
}

function pincodeOnLoad() {
    var cat = document.newPanApp.PAN_APPLCNT_STATUS.value;
    if (document.newPanApp.PAN_O_STATE.value == "99") {
	document.newPanApp.PAN_O_PIN.value = "999999";
	document.newPanApp.PAN_O_PIN.readOnly = true;
	document.newPanApp.PAN_O_PIN.disabled = false;
	document.newPanApp.PAN_O_COUNTRY.disabled = false;
	document.newPanApp.PAN_O_ZIP.disabled = false;
    } else if (document.newPanApp.PAN_O_STATE.value == "88") {
	document.newPanApp.PAN_O_PIN.value = "888888";
	document.newPanApp.PAN_O_PIN.readOnly = true;
	document.newPanApp.PAN_O_PIN.disabled = false;
	document.newPanApp.PAN_O_COUNTRY.disabled = true;
	document.newPanApp.PAN_O_ZIP.disabled = true;
    } else {
	//if(document.newPanApp.PAN_O_STATE.value == "") {
	// document.newPanApp.PAN_O_PIN.value = "";
	//}
	document.newPanApp.PAN_O_PIN.readOnly = false;
	document.newPanApp.PAN_O_COUNTRY.disabled = true;
	document.newPanApp.PAN_O_ZIP.disabled = true;
    }
    document.newPanApp.PAN_O_PIN.disabled = false;
    checkMaxSize('O'); 
    if (document.newPanApp.PAN_REP_STATE.value == "88") {
	document.newPanApp.PAN_REP_PIN.value = "888888";
	document.newPanApp.PAN_REP_PIN.readOnly = true;
	document.newPanApp.PAN_REP_PIN.disabled = false;
    }else {
	document.newPanApp.PAN_REP_PIN.readOnly = false;
	document.newPanApp.PAN_REP_PIN.disabled = false;
    }

    if (cat == "P" || cat == "B" || cat == "H" || cat == "A" || cat == "J") {
	if (document.newPanApp.PAN_R_STATE.value == "99") {
	    document.newPanApp.PAN_R_PIN.value = "999999";
	    document.newPanApp.PAN_R_PIN.readOnly = true;
	    document.newPanApp.PAN_R_PIN.disabled = false;
	    document.newPanApp.PAN_R_COUNTRY.disabled = false;
	    document.newPanApp.PAN_R_ZIP.disabled = false;
	} else if (document.newPanApp.PAN_R_STATE.value == "88") {
	    document.newPanApp.PAN_R_PIN.value = "888888";
	    document.newPanApp.PAN_R_PIN.readOnly = true;
	    document.newPanApp.PAN_R_PIN.disabled = false;
	    document.newPanApp.PAN_R_COUNTRY.disabled = true;
	    document.newPanApp.PAN_R_ZIP.disabled = true;
	} else {
	    //if(document.newPanApp.PAN_R_STATE.value == "") {
	    //document.newPanApp.PAN_R_PIN.value = "";
	    //}
	    document.newPanApp.PAN_R_PIN.readOnly = false;
	    document.newPanApp.PAN_R_COUNTRY.disabled = true;
	    document.newPanApp.PAN_R_ZIP.disabled = true;
	}
	document.newPanApp.PAN_R_PIN.disabled = false;
	checkMaxSize('R'); 
    }
}

function patchPINcode(flagForCommAddr) {
    var stateCode = eval("document.newPanApp.PAN_" + flagForCommAddr +"_STATE").value;
    if (stateCode == 99) {
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_PIN").disabled = false;
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_PIN").value = "999999";
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_PIN").readOnly = true;
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_COUNTRY").disabled = false;
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_ZIP").disabled = false;
    }else if (stateCode == 88) {
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_PIN").value = "888888";
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_PIN").readOnly = true;
	if(flagForCommAddr != "REP"){
	    eval("document.newPanApp.PAN_" + flagForCommAddr + "_COUNTRY").disabled = true;
	    eval("document.newPanApp.PAN_" + flagForCommAddr + "_ZIP").disabled = true;
	}
    } else {
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_PIN").value = "";
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_PIN").disabled = false;
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_PIN").readOnly = false;
	if(flagForCommAddr != "REP"){
	    eval("document.newPanApp.PAN_" + flagForCommAddr + "_COUNTRY").disabled = true;
	    eval("document.newPanApp.PAN_" + flagForCommAddr + "_ZIP").disabled = true;
	}
    }
    if(flagForCommAddr != "REP"){
	checkMaxSize(flagForCommAddr);
    }
}

function patchhiddenAmount() {
    document.getElementById("hiddenamount").value = document.getElementById("amount2").innerHTML; 
}

function patchAmount() {
    var RAflag =  checkRAdetails();  //true or false
    var commAddr = checkCommAddr();   // O or R
    var outofIndia = isOutsideIndia();  // Y or N

    //alert("RAflag:"+RAflag+"|outofIndia:"+outofIndia+"|commAddr:"+commAddr);
    if ( RAflag == true ) {
	if ( outofIndia == "Y") {
	    //check and cc options disabled and amount =67
	    document.newPanApp.PAN_PAY_MODE[1].disabled = true;
	    document.newPanApp.PAN_PAY_MODE[2].disabled = true;
	    document.newPanApp.PAN_PAY_MODE[3].disabled = true;
	    document.newPanApp.PAN_CHQ_NUM.disabled = true;
	    document.newPanApp.PAN_CHQ_DT_DD.disabled = true;
	    document.newPanApp.PAN_CHQ_DT_MM.disabled = true;
	    document.newPanApp.PAN_CHQ_DT_YYYY.disabled = true;
	    document.newPanApp.PAN_CHQ_BANK_NM.disabled = true;
	    document.newPanApp.PAN_CHQ_BRANCH.disabled = true;
	    document.newPanApp.PAN_CHQ_LOCATION.disabled = true;
	    document.getElementById("amount1").innerHTML = ""+amountToPatchindia;
	    document.getElementById("amount2").innerHTML = ""+amountToPatchindia;   
	    document.getElementById("amount3").innerHTML = ""+amountToPatchindia;
	    document.getElementById("amount4").innerHTML = ""+amountToPatchindia;
	    document.getElementById("amount5").innerHTML = ""+amountToPatchindia;
	} else if ( outofIndia == "N") {
	    // check and cc options enabled and amount = 717
	    document.newPanApp.PAN_PAY_MODE[0].disabled = false;
	    document.newPanApp.PAN_PAY_MODE[1].disabled = false;
	    document.newPanApp.PAN_PAY_MODE[2].disabled = false;
	    document.newPanApp.PAN_PAY_MODE[3].disabled = false;
	    document.newPanApp.PAN_CHQ_NUM.disabled = false;
	    document.newPanApp.PAN_CHQ_DT_DD.disabled = false;
	    document.newPanApp.PAN_CHQ_DT_MM.disabled = false;
	    document.newPanApp.PAN_CHQ_DT_YYYY.disabled = false;
	    document.newPanApp.PAN_CHQ_BANK_NM.disabled = false;
	    document.newPanApp.PAN_CHQ_BRANCH.disabled = false;
	    document.newPanApp.PAN_CHQ_LOCATION.disabled = false;
	    document.getElementById("amount1").innerHTML = ""+ amountToPatchindia;
	    document.getElementById("amount2").innerHTML = ""+ amountToPatchindia;
	    document.getElementById("amount3").innerHTML = ""+ amountToPatchindia;
	    document.getElementById("amount4").innerHTML = ""+ amountToPatchindia;
	    document.getElementById("amount5").innerHTML = ""+ amountToPatchindia;
	}
    } else {
	if (outofIndia == "Y") {
	    //alert("inside else outofindia");
	    document.newPanApp.PAN_PAY_MODE[1].disabled = true;
	    document.newPanApp.PAN_PAY_MODE[2].disabled = true;
	    document.newPanApp.PAN_PAY_MODE[3].disabled = true;
	    document.newPanApp.PAN_CHQ_NUM.disabled = true;
	    document.newPanApp.PAN_CHQ_DT_DD.disabled = true;
	    document.newPanApp.PAN_CHQ_DT_MM.disabled = true;
	    document.newPanApp.PAN_CHQ_DT_YYYY.disabled = true;
	    document.newPanApp.PAN_CHQ_BANK_NM.disabled = true;
	    document.newPanApp.PAN_CHQ_BRANCH.disabled = true;
	    document.newPanApp.PAN_CHQ_LOCATION.disabled = true;
	    var amount="";
	    if ( commAddr == "O" && document.newPanApp.PAN_O_STATE.value == "99" ) {
		//document.getElementById("amount1").innerHTML = ""+amountToPatchforeign;
		//document.getElementById("amount2").innerHTML = ""+amountToPatchforeign;     	
		amount=""+amountToPatchforeign;
	    }
	    if ( commAddr == "O" && document.newPanApp.PAN_O_STATE.value != "99") {
		//document.getElementById("amount1").innerHTML = ""+ amountToPatchindia;
		//document.getElementById("amount2").innerHTML = ""+ amountToPatchindia;
		amount=""+ amountToPatchindia;
	    }
	    if ( commAddr == "R" && document.newPanApp.PAN_R_STATE.value == "99") {
		//document.getElementById("amount1").innerHTML = ""+amountToPatchforeign;
		//document.getElementById("amount2").innerHTML = ""+amountToPatchforeign;     	
		amount=""+amountToPatchforeign;
	    }
	    if ( commAddr == "R" && document.newPanApp.PAN_R_STATE.value != "99") {
		//document.getElementById("amount1").innerHTML = ""+ amountToPatchindia;
		//document.getElementById("amount2").innerHTML = ""+ amountToPatchindia;
		amount=""+ amountToPatchindia;
	    }
	    document.getElementById("amount1").innerHTML = ""+ amount;
	    document.getElementById("amount2").innerHTML = ""+ amount;
	    document.getElementById("amount3").innerHTML = ""+ amount;
	    document.getElementById("amount4").innerHTML = ""+ amount;
	    document.getElementById("amount5").innerHTML = ""+ amount;
	} else if ( outofIndia == "N") {
	    document.newPanApp.PAN_PAY_MODE[0].disabled = false;
	    document.newPanApp.PAN_PAY_MODE[1].disabled = false;
	    document.newPanApp.PAN_PAY_MODE[2].disabled = false;
	    document.newPanApp.PAN_PAY_MODE[3].disabled = false;
	    document.newPanApp.PAN_CHQ_NUM.disabled = false;
	    document.newPanApp.PAN_CHQ_DT_DD.disabled = false;
	    document.newPanApp.PAN_CHQ_DT_MM.disabled = false;
	    document.newPanApp.PAN_CHQ_DT_YYYY.disabled = false;
	    document.newPanApp.PAN_CHQ_BANK_NM.disabled = false;
	    document.newPanApp.PAN_CHQ_BRANCH.disabled = false;
	    document.newPanApp.PAN_CHQ_LOCATION.disabled = false;

	    document.getElementById("amount1").innerHTML = ""+ amountToPatchindia;
	    document.getElementById("amount2").innerHTML = ""+ amountToPatchindia;
	    document.getElementById("amount3").innerHTML = ""+ amountToPatchindia;
	    document.getElementById("amount4").innerHTML = ""+ amountToPatchindia;
	    document.getElementById("amount5").innerHTML = ""+ amountToPatchindia;
	}
    }
}

function disableCountry() {
    var cat = document.newPanApp.PAN_APPLCNT_STATUS.value;
    if (document.newPanApp.PAN_O_STATE.value != "99") {
	document.newPanApp.PAN_O_ZIP.disabled = true;
	document.newPanApp.PAN_O_COUNTRY.disabled = true;
    } else {
	document.newPanApp.PAN_O_PIN.value = "999999";
	document.newPanApp.PAN_O_PIN.readOnly = true;
    }
    if (cat == "P" || cat == "B" || cat == "H" || cat == "A" || cat == "J") {
	if (document.newPanApp.PAN_R_STATE.value != "99") {
	    document.newPanApp.PAN_R_ZIP.disabled = true;
	    document.newPanApp.PAN_R_COUNTRY.disabled = true;
	} else {
	    document.newPanApp.PAN_R_PIN.value = "999999";
	    document.newPanApp.PAN_R_PIN.readOnly = true;
	}
    }
}

function goBack() {
    //window.toolbar=false;
    //var url = window.location.href;
    //window.location.href=url;
    window.history.go(1);
    pause(500);
}

function pause(millisecondi) {
    var now = new Date();
    var exitTime = now.getTime() + millisecondi;
    while(true) {
	now = new Date();
	if(now.getTime() > exitTime)
	    return;
    }
}

function bodyOnLoad() {
    goBack();
    var cat = document.newPanApp.PAN_APPLCNT_STATUS.value;
    if (cat == "P") {
	patchState(getAOCatId());
	//patchPINcode('R');
    }
    disableCountry();
    patchAmount();
    patchhiddenAmount();
    patchDocuments();
    //pincodeOnLoad();
    var catRAarmy = document.newPanApp.PAN_REP_CAT[0].checked;
    var catRAnavy = document.newPanApp.PAN_REP_CAT[1].checked;
    var catRAairforce = document.newPanApp.PAN_REP_CAT[2].checked;
    var catRAother = document.newPanApp.PAN_REP_CAT[3].checked;
    if(catRAarmy  || catRAnavy || catRAairforce){
	populateStateList('REP','0');
    }
    else{
	populateStateList('REP','3');
    }

    var isRAMS = document.newPanApp.PAN_REP_TITLE[3].checked;
    if ( isRAMS ){
	populatePOIforRA('4');
    } else {
	populatePOIforRA('0');
    }

    ifRAisMs();
    pincodeOnLoad();
}

function checkCommAddr() {
    var returnVal="O";
    if (document.newPanApp.PAN_CMNC_ADDR_FLG[0].checked) {
	returnVal="R";
    }
    if (document.newPanApp.PAN_CMNC_ADDR_FLG[1].checked) {
	returnVal="O";
    }
    return returnVal;
}

function getCitizen() {
    var citizen = "N"
	if (document.newPanApp.PAN_CTZN_FLG[0].checked == true) {
	    citizen="Y";
	} else if (document.newPanApp.PAN_CTZN_FLG[1].checked == true) {
	    citizen="N";
	}
    return citizen;
}

function getOutSideIndia() {
    var outside="N";
    if (document.newPanApp.PAN_CMNC_ADDR_FLG[0].checked == true) {
	if (document.newPanApp.PAN_R_STATE.value == "99") {
	    outside="Y";
	} else {
	    outside="N";
	}
    } else if (document.newPanApp.PAN_CMNC_ADDR_FLG[1].checked == true) {
	if (document.newPanApp.PAN_O_STATE.value == "99") {
	    outside="Y";
	} else {
	    outside="N";
	}
    }
    return outside;
}

function patchDocuments() {
    var citizen = getCitizen();
    var outside = getOutSideIndia();
    var index=0;
    if (citizen == "Y") {
	if (outside == "N") {
	    index=0;         
	} else {
	    index=1;         
	}
    }else {
	if (outside == "N") {
	    index=2;         
	} else {
	    index=3;         
	}
    }
    populateSelectionListPOI(index);
    populateSelectionListPOA(index);

}

function populateSelectionListPOI (index) {
    var categorySelected = document.newPanApp.PAN_APPLCNT_STATUS.value;
    if (categorySelected == "P" || categorySelected == "H") {
	populateIndividualPOI(index);
    } else {
	populateOtherThanIndividualPOI();
    }
}

function populateIndividualPOI(index) {
    var selectElement = document.getElementById("selectAccordingToCountryPOI");
    var totalSelectItems = arraySelectPOI[index].length;
    selectElement.options.length = 0;
    for (i = 0; i < totalSelectItems; i++) {
	if (arraySelectPOI[index][i][0] == arraySelectPOI_SELECTED) {
	    selectElement.options[i] = new Option(arraySelectPOI[index][i][1],arraySelectPOI[index][i][0], true, true);
	} else {
	    selectElement.options[i] = new Option(arraySelectPOI[index][i][1],arraySelectPOI[index][i][0], false, false);
	}
    }
}

function populatePOIforRA(index){
    var selectElementRAPOI = document.getElementById("selectAccordingToCategoryPOI");
    var totalSelectItemsRAPOI = arraySelectPOI[index].length;
    selectElementRAPOI.options.length = 0;
    for (i = 0; i < totalSelectItemsRAPOI; i++){
	if (arraySelectPOI[index][i][0] == arraySelectPOIRA_SELECTED){
	    selectElementRAPOI.options[i] = new Option(arraySelectPOI[index][i][1],arraySelectPOI[index][i][0], true, true);
	} else {
	    selectElementRAPOI.options[i] = new Option(arraySelectPOI[index][i][1],arraySelectPOI[index][i][0], false, false);
	}
    }
    populatePOAforRA(index);
}


function populatePOAforRA(index){
    var selectElementRAPOA = document.getElementById("selectAccordingToCategoryPOA");
    var totalSelectItemsRAPOA = arraySelectPOA[index].length;
    selectElementRAPOA.options.length = 0;
    for (i = 0; i < totalSelectItemsRAPOA; i++){
	if (arraySelectPOA[index][i][0] == arraySelectPOARA_SELECTED){
	    selectElementRAPOA.options[i] = new Option(arraySelectPOA[index][i][1],arraySelectPOA[index][i][0], true, true);
	} else {
	    selectElementRAPOA.options[i] = new Option(arraySelectPOA[index][i][1],arraySelectPOA[index][i][0], false, false);
	}
    }
}

function populateOtherThanIndividualPOI() {
    var selectElementPOI = document.getElementById("selectAccordingToCountryPOI");
    var category = "X";
    var isOfficeInIndia = getOfficeLocation();
    if (isOfficeInIndia == 0) {
	category = document.newPanApp.PAN_APPLCNT_STATUS.value;
    }
    selectElementPOI.options.length = 0;
    totalSelectItems = otherThanIndividualPOI[isOfficeInIndia][categoryIndex[category]].length;
    for (i = 0; i < totalSelectItems; i++) {
	var selectValue = otherThanIndividualPOI[isOfficeInIndia][categoryIndex[category]][i][0];
	var selectText = otherThanIndividualPOI[isOfficeInIndia][categoryIndex[category]][i][1];
	if (otherThanIndividualPOI[isOfficeInIndia][categoryIndex[category]][i][0] == arraySelectPOI_SELECTED) {
	    selectElementPOI.options[i] = new Option(selectText, selectValue, true, true);
	} else {
	    selectElementPOI.options[i] = new Option(selectText, selectValue, false, false);
	}
    }
}

function populateOtherThanIndividualPOA() {
    var selectElementPOA = document.getElementById("selectAccordingToCountryPOA");
    var category = "X";
    var isOfficeInIndia = getOfficeLocation();
    if (isOfficeInIndia == 0) {
	category = document.newPanApp.PAN_APPLCNT_STATUS.value;
    }
    selectElementPOA.options.length = 0;
    totalSelectItems = otherThanIndividualPOA[isOfficeInIndia][categoryIndex[category]].length;
    for (i = 0; i < totalSelectItems; i++) {
	var selectValue = otherThanIndividualPOA[isOfficeInIndia][categoryIndex[category]][i][0];
	var selectText = otherThanIndividualPOA[isOfficeInIndia][categoryIndex[category]][i][1];
	if (otherThanIndividualPOA[isOfficeInIndia][categoryIndex[category]][i][0] == arraySelectPOA_SELECTED) {
	    selectElementPOA.options[i] = new Option(selectText, selectValue, true, true);
	} else {
	    selectElementPOA.options[i] = new Option(selectText, selectValue, false, false);
	}
    }
}

/*for individual Only */
/***** START *****/
function getAOCatId() {
    var id ="4";
    for (i=0;i< document.newPanApp.ARM_N_A_CAT.length; i++) {
	if (document.newPanApp.ARM_N_A_CAT[i].checked==true) {
	    id=i;
	    break;
	}
    }
    return id;
}

function patchState(id) {
    populateStateList('R',id);
    populateStateList('O',id);
}
/*New Code Start DATE*/
function checkNameWithRAName(){
    var app_status = document.newPanApp.PAN_APPLCNT_STATUS.value; 
    //alert("Inside Method"+app_status);
    var assesseelastname = document.newPanApp.PAN_LST_NM_REP.value;
    var assesseefirstname = document.newPanApp.PAN_FST_NM_REP.value;
    var assesseemiddlename = document.newPanApp.PAN_MDL_NM_REP.value;
    var lastname = document.newPanApp.PAN_LST_MN_NM.value;
    var tot_ass = assesseelastname +""+assesseefirstname+""+assesseemiddlename;
    var titleRA1  = document.newPanApp.PAN_REP_TITLE[0].checked;
    var titleRA2  = document.newPanApp.PAN_REP_TITLE[1].checked;
    var titleRA3  = document.newPanApp.PAN_REP_TITLE[2].checked;
    var titleRA4  = document.newPanApp.PAN_REP_TITLE[3].checked;
    //alert(app_status+" "+assesseelastname+" "+assesseefirstname+" "+assesseemiddlename);
    //alert("TOTAL ASSESS:::::: "+tot_ass+"last name"+lastname+"Title RA4  "+titleRA4);


    if(app_status == "P"){
	var title1     = document.newPanApp.PAN_MN_TITL[0].checked;
	var title2    = document.newPanApp.PAN_MN_TITL[1].checked;
	var title3    = document.newPanApp.PAN_MN_TITL[2].checked;
	var firstname = document.newPanApp.PAN_FST_MN_NM.value;
	//Last
	var middlename = document.newPanApp.PAN_MDL_MN_NM.value;
	var tot = lastname +""+firstname+""+middlename;

	//alert("TOTAL Name  :::::: "+tot);
	//alert(lastname+" "+firstname+" "+middlename);
	tot_ass = tot_ass.replace(/\s+/g, "");
	tot_ass = tot_ass.toUpperCase();
	tot = tot.replace(/\s+/g, "");
	tot = tot.toUpperCase();
	//alert(title1+"  "+title2+"  "+title3+"  "+titleRA1+"  "+titleRA2+"  "+titleRA3);
	if(tot != "" && tot_ass!=""){
	    if((title1 &&  titleRA1) || (title2 && titleRA2) || (title3 && titleRA3)){
		if(lastname !="" && middlename !=""){
		    if(firstname == ""){
			alert("Please Enter Applicant FirstName");
			document.newPanApp.PAN_FST_MN_NM.focus();
			return false;
		    }
		}
		if(lastname == ""){
		    alert("Please Enter Applicant LastName");
		    document.newPanApp.PAN_LST_MN_NM.focus();
		    return false;
		}
		if(assesseelastname == ""){
		    alert("Please Enter Representative Assessee LastName");
		    document.newPanApp.PAN_LST_NM_REP.focus();
		    return false;
		}
		if(assesseelastname!="" && assesseemiddlename!= ""){
		    if(assesseefirstname == ""){
			alert("Please Enter Representative Assessee FirstName");
			document.newPanApp.PAN_FST_NM_REP.focus();
			return false;
		    }  
		}
		//
		if(tot_ass == tot){
		    alert("Representative Assessee's name and Applicant's name cannot be same. Please enter correct Representative Assessee name");
		    //	document.newPanApp.PAN_LST_MN_NM.focus();
		    document.newPanApp.PAN_LST_NM_REP.focus();
		    return false;
		}
	    }
	}
    }
    return true;
}



/****/
function populateStateList(flag,id) {
    var selectElement = eval("document.newPanApp.PAN_"+flag+"_STATE");
    var STATE_SELECTED=""; 
    if (flag == 'R') {
	STATE_SELECTED = R_STATE_SELECTED;
    } else if (flag == 'O') {    
	STATE_SELECTED = O_STATE_SELECTED;
    } else if (flag == 'REP'){
	STATE_SELECTED = REP_STATE_SELECTED;
    }
    var totalSelectItems = states[0].length;
    selectElement.options.length = 0;
    var  i = 0;
    if (flag == 'REP') {
	var catRA1 = document.newPanApp.PAN_REP_CAT[0].checked;
	var catRA2 = document.newPanApp.PAN_REP_CAT[1].checked;
	var catRA3 = document.newPanApp.PAN_REP_CAT[2].checked;
	var titleRA = document.newPanApp.PAN_REP_TITLE[3].checked;
	if ((catRA1 || catRA2 || catRA3) && !titleRA){
	    id = 1;
	}else
	{
	    id = 3; 
	}
	for (; i < (totalSelectItems - 1) ; i++) {
	    if (states[0][i][0] == STATE_SELECTED) {
		selectElement.options[i] = new Option(states[0][i][1],states[0][i][0], true, true);
	    } else {
		selectElement.options[i] = new Option(states[0][i][1],states[0][i][0], false, false);    
	    }
	}
    }else {
	for (; i < totalSelectItems; i++) {
	    if (states[0][i][0] == STATE_SELECTED) {
		selectElement.options[i] = new Option(states[0][i][1],states[0][i][0], true, true);
	    } else {
		selectElement.options[i] = new Option(states[0][i][1],states[0][i][0], false, false);    
	    }
	}
    }
    if (id == 0 || id == 1 || id == 2) {
	items =states[1].length;
	for (j = 0; j < items;i++,j++) {
	    if (states[1][j][0] == STATE_SELECTED) {
		selectElement.options[i] = new Option(states[1][j][1], states[1][j][0], true, true);
	    } else {
		selectElement.options[i] = new Option(states[1][j][1], states[1][j][0], false, false);
	    }
	}
    }
}
/***** END *****/

function populateSelectionListPOA (index) {
    var categorySelected = document.newPanApp.PAN_APPLCNT_STATUS.value;
    if (categorySelected == "P" || categorySelected == "H") {
	populateIndividualPOA(index);
    } else {
	populateOtherThanIndividualPOA();
    }
}

function populateIndividualPOA(index) {
    var selectElement = document.getElementById("selectAccordingToCountryPOA");
    var totalSelectItems = arraySelectPOA[index].length;
    selectElement.options.length = 0;
    for (i = 0; i < totalSelectItems; i++) {
	if (arraySelectPOA[index][i][0] == arraySelectPOA_SELECTED) {
	    selectElement.options[i] = new Option(arraySelectPOA[index][i][1],arraySelectPOA[index][i][0], true, true);
	} else {
	    selectElement.options[i] = new Option(arraySelectPOA[index][i][1],arraySelectPOA[index][i][0], false, false);
	}
    }
}

function getOfficeLocation() {
    var cat = document.newPanApp.PAN_APPLCNT_STATUS.value;
    var returnVal = 0;
    if( cat == "C" || cat == "F" || cat == "L" || cat == "T") {
	if (document.newPanApp.PAN_O_STATE.value == "99") {
	    returnVal=1;
	} else {
	    returnVal=0;
	}
    } else {
	if (document.newPanApp.PAN_CMNC_ADDR_FLG[0].checked == true) {
	    if (document.newPanApp.PAN_R_STATE.value == "99") {
		returnVal=1;
	    } else {
		returnVal=0;
	    }
	} else if (document.newPanApp.PAN_CMNC_ADDR_FLG[1].checked == true) {
	    if (document.newPanApp.PAN_O_STATE.value == "99") {
		returnVal=1;
	    } else {
		returnVal=0;
	    }
	}
    }
    return returnVal;
}

function checkMaxSize(flagForCommAddr) {
    var returnVal=false;
    var statecode =  eval("document.newPanApp.PAN_" + flagForCommAddr + "_STATE").value;
    var cityname  =  eval("document.newPanApp.PAN_" + flagForCommAddr + "_ADDR5").value;
    if (statecode == "99") {
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_ADDR5").maxLength = CITY_MAX_SIZE;
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_ADDR5").size = CITY_SIZE;
	if (cityname.length>19) {
	    eval("document.newPanApp.PAN_" + flagForCommAddr + "_ADDR5").value = "";
	    alert("Please enter name of city in 19 characters only");
	    eval("document.newPanApp.PAN_" + flagForCommAddr + "_ADDR5").focus();
	}
	returnVal=false;
    } else {
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_ADDR5").maxLength = "30";
	eval("document.newPanApp.PAN_" + flagForCommAddr + "_ADDR5").size = "30";
	returnVal=true;
    }   
}

function ifRAisMs () {
    var flag0 = document.newPanApp.PAN_REP_TITLE[0].checked;
    var flag1 = document.newPanApp.PAN_REP_TITLE[1].checked;
    var flag2 = document.newPanApp.PAN_REP_TITLE[2].checked;
    var flag3 = document.newPanApp.PAN_REP_TITLE[3].checked;

    //  alert ("flags are ="+flag0+ flag1+ flag2 + flag3);
    if ( flag3 ) {
	eval("document.newPanApp.PAN_LST_NM_REP").maxLength = "75";
	eval("document.newPanApp.PAN_LST_NM_REP").size = "75";
	eval("document.newPanApp.PAN_FST_NM_REP").disabled = true;
	eval("document.newPanApp.PAN_MDL_NM_REP").disabled = true;

	document.newPanApp.PAN_REP_CAT[0].disabled = true;
	document.newPanApp.PAN_REP_CAT[1].disabled = true;
	document.newPanApp.PAN_REP_CAT[2].disabled = true;
	document.newPanApp.PAN_REP_CAT[3].disabled = true;
    } else 
	if ( flag0 || flag1 || flag2 ) {
	    eval("document.newPanApp.PAN_LST_NM_REP").maxLength = "25";
	    eval("document.newPanApp.PAN_LST_NM_REP").size = "25";
	    eval("document.newPanApp.PAN_FST_NM_REP").disabled = false;
	    eval("document.newPanApp.PAN_MDL_NM_REP").disabled = false;

	    document.newPanApp.PAN_REP_CAT[0].disabled = false;
	    document.newPanApp.PAN_REP_CAT[1].disabled = false;
	    document.newPanApp.PAN_REP_CAT[2].disabled = false;
	    document.newPanApp.PAN_REP_CAT[3].disabled = false;
	} else {
	    eval("document.newPanApp.PAN_LST_NM_REP").maxLength = "25";
	    eval("document.newPanApp.PAN_LST_NM_REP").size = "25";
	    eval("document.newPanApp.PAN_FST_NM_REP").disabled = false;
	    eval("document.newPanApp.PAN_MDL_NM_REP").disabled = false;

	    document.newPanApp.PAN_REP_CAT[0].disabled = true;
	    document.newPanApp.PAN_REP_CAT[1].disabled = true;
	    document.newPanApp.PAN_REP_CAT[2].disabled = true;
	    document.newPanApp.PAN_REP_CAT[3].disabled = true;
	}
}


function RAPinClear(){
    document.newPanApp.PAN_REP_PIN.value="";
}


function trapEnterKey(event) {
    if (event.keyCode == 13) {
	event.returnValue = false;
	event.cancel = true;
	src = (event.srcElement) ? event.srcElement.id : 'undefined';
	if ( src == 'txtCode' || src == 'undefined') {
	    src = "btnConfirm";
	}
	document.getElementById(src).click();
    }
}



function onKeyUpBlockChars(e) {
    var key;
    if (isIE()) {
	key = e.keyCode;
    } else {
	key = e.which;
    }
    var keychar = String.fromCharCode(key);

    var lenTxt = (document.getElementById("txtCode").value).length;
    if (lenTxt >= 4) {
	document.getElementById("btnConfirm").disabled = false;
	document.getElementById("btnEdit").disabled = false;
    } else if (lenTxt < 4) {
	document.getElementById("btnConfirm").disabled = true;
	document.getElementById("btnEdit").disabled = true;
    }
}


function isIE() {
    return (navigator.appName.indexOf("Microsoft") != -1);
}


function trim_Image_Code() {
    var eid = document.getElementById("txtCode"); 
    var str = eid.value;
    eid.value = str.replace(/\s+/g, "");
}

function enabledropdown(){
    var assesseetitle1 = document.newPanApp.PAN_REP_TITLE[0].checked;
    var assesseetitle2 = document.newPanApp.PAN_REP_TITLE[1].checked;
    var assesseetitle3 = document.newPanApp.PAN_REP_TITLE[2].checked;
    var assesseetitle4 = document.newPanApp.PAN_REP_TITLE[3].checked;
    var assesseelastname = document.newPanApp.PAN_LST_NM_REP.value;
    var assesseefirstname = document.newPanApp.PAN_FST_NM_REP.value;
    var assesseemiddlename = document.newPanApp.PAN_MDL_NM_REP.value;
    var assesseeaddr1 = document.newPanApp.PAN_REP_ADDR1.value;
    var assesseeaddr2 = document.newPanApp.PAN_REP_ADDR2.value;
    var assesseeaddr3 = document.newPanApp.PAN_REP_ADDR3.value;
    var assesseeaddr4 = document.newPanApp.PAN_REP_ADDR4.value;
    var assesseeaddr5 = document.newPanApp.PAN_REP_ADDR5.value;
    var assesseestate = document.newPanApp.PAN_REP_STATE.value;
    var assesseepin   = document.newPanApp.PAN_REP_PIN.value;
    if(assesseetitle1 || assesseetitle2 || assesseetitle3 || assesseetitle4 || assesseelastname || assesseefirstname || assesseemiddlename || assesseeaddr1 || assesseeaddr2 || assesseeaddr3 || assesseeaddr4 || assesseeaddr5 || assesseestate || assesseepin){
	document.newPanApp.PAN_PRF_IDNTY_ASSESSEE.disabled = false;
	document.newPanApp.PAN_PRF_ADDR_ASSESSEE.disabled = false;
    }
    else{
	document.newPanApp.PAN_PRF_IDNTY_ASSESSEE.disabled = true;
	document.newPanApp.PAN_PRF_ADDR_ASSESSEE.disabled = true;
    }
}

function isHIDEnabled() {
    try {
	var imgValue = document.getElementById("imgCode").value;
    } catch (err) {
	document.getElementById("btnConfirm").disabled = false;
	document.getElementById("btnEdit").disabled = false;
    }
}


function showButton(){
    var saveBtn = document.getElementById("saveBtn");
    if(isIE()){
	saveBtn.style.display = "inline";
    }
    else {
	saveBtn.style.display = "none";
    }
}

function saveFile(){
    document. execCommand("SaveAs");  
}

function checkHashValues(textValue) {

    // alert("inside  checkHashValues"+textValue);
    if (textValue != ""){
	var re = /^[a-zA-Z0-9 \(\)\,\.\&\-\{\}\*\$\#\{\}\[\]\'\\\/]*$/;
	var resultValue = re.test(textValue);
	return resultValue;
    } else {
	return true;
    }
}

function checkPinValue(textValue) {
    //  alert("inside checkPinValue");
    if (textValue != "") {
	var re = /^[0-9a-zA-Z]*$/;
	var resultValue = re.test(textValue);
	return resultValue;
    } else {
	return true;
    }
}

function sendHashValues() {
    var hashFlag = true;

    //For Office address
    hashFlag = checkHashValues(document.newPanApp.PAN_OFF_NM.value);
    if(!hashFlag) {
	document.newPanApp.PAN_OFF_NM.focus();
	alert("Please do not write special characters in office name field");
	return hashFlag;
    }
    hashFlag = checkHashValues(document.newPanApp.PAN_O_ADDR1.value);
    if(!hashFlag) {
	document.newPanApp.PAN_O_ADDR1.focus();
	alert("Please do not write special characters in office flat address field");
	return hashFlag;
    }
    hashFlag = checkHashValues(document.newPanApp.PAN_O_ADDR2.value);
    if(!hashFlag) {
	document.newPanApp.PAN_O_ADDR2.focus();
	alert("Please do not write special characters in office building address field");
	return hashFlag;
    }  
    hashFlag = checkHashValues(document.newPanApp.PAN_O_ADDR3.value);
    if(!hashFlag) { 
	document.newPanApp.PAN_O_ADDR3.focus();
	alert("Please do not write special characters in office road address field");
	return hashFlag;
    }  
    hashFlag = checkHashValues(document.newPanApp.PAN_O_ADDR4.value);
    if(!hashFlag) {
	document.newPanApp.PAN_O_ADDR4.focus();
	alert("Please do not write special characters in office area address field");
	return hashFlag;
    }
    hashFlag = checkHashValues(document.newPanApp.PAN_O_ADDR5.value);
    if(!hashFlag) {
	document.newPanApp.PAN_O_ADDR5.focus();
	alert("Please do not write special characters in office town address field");
	return hashFlag;
    }  
    hashFlag = checkPinValue(document.newPanApp.PAN_O_PIN.value);
    if(!hashFlag) { 
	document.newPanApp.PAN_O_PIN.focus();
	alert("Please do not write special characters in office pin code field");
	return hashFlag;
    }
    hashFlag = checkPinValue(document.newPanApp.PAN_O_ZIP.value);
    if(!hashFlag) { 
	document.newPanApp.PAN_O_ZIP.focus();
	alert("Please do not write special characters in office zip code field");
	return hashFlag;
    }
    //For RA Address 
    hashFlag = checkHashValues(document.newPanApp.PAN_REP_ADDR1.value);
    if(!hashFlag) {
	document.newPanApp.PAN_REP_ADDR1.focus();
	alert("Please do not write special characters in RA flat address field");
	return hashFlag;
    }
    hashFlag = checkHashValues(document.newPanApp.PAN_REP_ADDR2.value);
    if(!hashFlag) {
	document.newPanApp.PAN_REP_ADDR2.focus();
	alert("Please do not write special characters in RA building address field");
	return hashFlag;
    }  
    hashFlag = checkHashValues(document.newPanApp.PAN_REP_ADDR3.value);
    if(!hashFlag) { 
	document.newPanApp.PAN_REP_ADDR3.focus();
	alert("Please do not write special characters in RA road address field");
	return hashFlag;
    }  
    hashFlag = checkHashValues(document.newPanApp.PAN_REP_ADDR4.value);
    if(!hashFlag) {
	document.newPanApp.PAN_REP_ADDR4.focus();
	alert("Please do not write special characters in RA area address field");
	return hashFlag;
    }
    hashFlag = checkHashValues(document.newPanApp.PAN_REP_ADDR5.value);
    if(!hashFlag) {
	document.newPanApp.PAN_REP_ADDR5.focus();
	alert("Please do not write special characters in RA town address field");
	return hashFlag;
    }  
    hashFlag = checkPinValue(document.newPanApp.PAN_REP_PIN.value);
    if(!hashFlag) { 
	document.newPanApp.PAN_REP_PIN.focus();
	alert("Please do not write special characters in RA pin code field");
	return hashFlag;
    }
    //For Residence address
    var cat = document.newPanApp.PAN_APPLCNT_STATUS.value;
    if (cat == "P" || cat == "B" || cat == "H" || cat == "A" || cat == "J"){
	if(document.newPanApp.PAN_R_ADDR1.value != null){
	    hashFlag = checkHashValues(document.newPanApp.PAN_R_ADDR1.value);
	    if(!hashFlag){

		document.newPanApp.PAN_R_ADDR1.focus();
		alert("Please do not write special characters in residence flat address field");
		return hashFlag;
	    }
	    hashFlag = checkHashValues(document.newPanApp.PAN_R_ADDR2.value);
	    if(!hashFlag) {
		document.newPanApp.PAN_R_ADDR2.focus();
		alert("Please do not write special characters in residence building address field");
		return hashFlag;
	    }  
	    hashFlag = checkHashValues(document.newPanApp.PAN_R_ADDR3.value);
	    if(!hashFlag) { 
		document.newPanApp.PAN_R_ADDR3.focus();
		alert("Please do not write special characters in residence road address field");
		return hashFlag;
	    }
	    hashFlag = checkHashValues(document.newPanApp.PAN_R_ADDR4.value);
	    if(!hashFlag) {
		document.newPanApp.PAN_R_ADDR4.focus();
		alert("Please do not write special characters in residence area address field");
		return hashFlag;
	    }  
	    hashFlag = checkHashValues(document.newPanApp.PAN_R_ADDR5.value);
	    if(!hashFlag) {
		document.newPanApp.PAN_R_ADDR5.focus();
		alert("Please do not write special characters in residence town address field");
		return hashFlag;
	    }
	    hashFlag = checkPinValue(document.newPanApp.PAN_R_PIN.value);
	    if(!hashFlag) {
		document.newPanApp.PAN_R_PIN.focus();
		alert("Please do not write special characters in residence pin code field");
		return hashFlag;
	    } 
	    hashFlag = checkPinValue(document.newPanApp.PAN_R_ZIP.value);
	    if(!hashFlag) {
		document.newPanApp.PAN_R_ZIP.focus();
		alert("Please do not write special characters in residence zip code field");
		return hashFlag;
	    } 
	}
    }
    return hashFlag;
}



function toggle(name, index){
    index = index - 1;
    objVal = eval("document.newPanApp."+name+"_VAL");
    var val= objVal.value;
    objsrc = eval("document.newPanApp."+name+"["+index+"]");
    if(parseInt(val, 10) == parseInt(index, 10)){
	objVal.value = "";
	objsrc.checked = false;
    }
    else{
	objVal.value = index;
    }
    ifRAisMs();
}

function onSubmitCheckPrivateLimited(){
    var cat = document.newPanApp.PAN_APPLCNT_STATUS.value;
    var fieldNames = new Array(12);
    fieldNames[0] = "PAN_LST_MN_NM";
    fieldNames[1] = "PAN_LST_AL_NM";
    fieldNames[2] = "PAN_LST_NM_REP";
    fieldNames[3] = "PAN_FST_NM_REP";
    fieldNames[4] = "PAN_MDL_NM_REP";
    fieldNames[5] = "PAN_FST_MN_NM";
    fieldNames[6] = "PAN_MDL_MN_NM";
    fieldNames[7] = "PAN_FST_AL_NM";
    fieldNames[8] = "PAN_MDL_AL_NM";
    fieldNames[9] = "PAN_LST_FTHR_NM";
    fieldNames[10] = "PAN_FST_FTHR_NM";
    fieldNames[11] = "PAN_MDL_FTHR_NM";


    if (cat == "P"){
	var count;
	for(count = 0; count < fieldNames.length; count++){
	    var flag = checkPrivateLimited(fieldNames[count], count);
	    if ( !flag ) {
		return false;
	    }
	}
	return true;
    }
    else if (cat == "C"){
	var count ;
	for(count = 2; count < 5; count++){
	    var flag = checkPrivateLimited(fieldNames[count], count);
	    if ( !flag ) {
		return false;
	    }
	}
	return true;
    }
    else {

	var count ;
	for(count = 0; count < 5; count++){
	    var flag = checkPrivateLimited(fieldNames[count], count);
	    if ( !flag ) {
		return false;
	    }
	}
	return true;
    }
}

function checkPrivateLimited(name, count){

    var RAcat = document.newPanApp.PAN_REP_TITLE[3].checked;
    if( RAcat && ( count ==2 || count ==3 || count ==4 )){
	return true;
    }

    var fieldNameMaping = new Array(12);
    fieldNameMaping[0] = "Applicant Last Name";
    fieldNameMaping[1] = "Applicant other Last Name";
    fieldNameMaping[2] = "RA Last Name";
    fieldNameMaping[3] = "RA First Name";
    fieldNameMaping[4] = "RA Middle Name";
    fieldNameMaping[5] = "Applicant First Name";
    fieldNameMaping[6] = "Applicant Middle Name";
    fieldNameMaping[7] = "Applicant other First Name";
    fieldNameMaping[8] = "Applicant other Middle Name";
    fieldNameMaping[9] = "Father Last Name";
    fieldNameMaping[10] = "Father First Name";
    fieldNameMaping[11] = "Father Middle Name";

    var value = eval("document.newPanApp."+ name).value;
    var msg =  fieldNameMaping[count];

    value = value.toLowerCase();
    var pattern1 = "private";
    var pattern2 = "limited";
    var pattern3 = "private limited";

    if ( value.indexOf(pattern1) > -1 || value.indexOf(pattern2) > -1 || value.indexOf(pattern3) > -1 ){
	eval("document.newPanApp."+ name).focus();
	var result = confirm("Words 'Private' or 'Limited' or 'Private Limited' are not allowed in " + msg + ". Do you still want to continue?");
	return result;
    }
    return true;
}

function checkLastNameRA(textValue) {
    var titleRA = document.newPanApp.PAN_REP_TITLE[3].checked;
    var re;
    if (textValue != "") {
	if (titleRA){
	    re = /^[a-zA-Z0-9 \#\.\-\{\}\(\)\$\*\[\]\,\\\/\&\']*$/;
	}
	else{
	    re = /^[0-9a-zA-Z \']*$/;
	}
	var resultValue = re.test(textValue);
	if (resultValue == true) {
	    if(charCount(textValue) > 1) {
		resultValue = false;
	    }
	}
	return resultValue;
    } else {
	return true;
    }
}
////New

function CheckAO_Other(){
    var areaCd =document.newPanApp.PAN_AREA_CD.value; 
    var aoType =document.newPanApp.PAN_AO_TYP.value;
    var rCode =document.newPanApp.PAN_RNG_CD.value;
    var aoNum =document.newPanApp.PAN_AO_NUM.value;
    //var fieldType_ind  =document.newPanApp.ARM_N_A_CAT[3].checked;


    //if(fieldType_ind == true) {
    if(areaCd.toUpperCase() == "PNE" && aoType.toUpperCase()=="W" && rCode.toUpperCase()=="55"  && aoNum.toUpperCase()=="3") {
	alert("Applicants other than individual category cannot enter AO codes pertaining to defence personnel. Please select valid AO code details");
	document.newPanApp.PAN_AREA_CD.focus(); 
	return false; 
    }
    if(areaCd.toUpperCase() == "MUM" && aoType.toUpperCase()=="W" && rCode.toUpperCase()=="11"  && aoNum.toUpperCase()=="8") {
	alert("Applicants other than individual category cannot enter AO codes pertaining to defence personnel. Please select valid AO code details");
	document.newPanApp.PAN_AREA_CD.focus(); 
	return false; 
    }
    if(areaCd.toUpperCase() == "DEL" && aoType.toUpperCase()=="W" && rCode.toUpperCase()=="72"  && aoNum.toUpperCase()=="2") {
	alert("Applicants other than individual category cannot enter AO codes pertaining to defence personnel. Please select valid AO code details");
	document.newPanApp.PAN_AREA_CD.focus(); 
	return false; 
    }
    //}


    return true;

}
