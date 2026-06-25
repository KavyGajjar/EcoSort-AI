function classifyWaste(){
    const item=document.getElementById("itemInput").value.toLowerCase().trim();
    const result=document.getElementById("result");

    const wasteData = {

        // ♻️ Plastic
        "plastic bottle":{
            type:"Recyclable",
            dispose:"Rinse and place in the plastic recycling bin."
        },
        "plastic bag":{
            type:"Recyclable",
            dispose:"Deposit at a plastic collection or recycling center."
        },
        "plastic container":{
            type:"Recyclable",
            dispose:"Clean before placing in the recycling bin."
        },
        "shampoo bottle":{
            type:"Recyclable",
            dispose:"Rinse and recycle with plastic waste."
        },
        "milk carton":{
            type:"Recyclable",
            dispose:"Rinse and recycle where carton recycling is available."
        },
        "toothpaste tube":{
            type:"Recyclable",
            dispose:"Recycle if accepted by your local recycling facility."
        },
        "detergent bottle":{
            type:"Recyclable",
            dispose:"Rinse before recycling."
        },
        "water bottle":{
            type:"Recyclable",
            dispose:"Place in the plastic recycling bin."
        },
        "food wrapper":{
            type:"Non-Recyclable",
            dispose:"Dispose in general waste unless recyclable locally."
        },
        "plastic spoon":{
            type:"Non-Recyclable",
            dispose:"Dispose in general waste."
        },
    
        // 📄 Paper
        "paper":{
            type:"Recyclable",
            dispose:"Recycle if clean and dry."
        },
        "newspaper":{
            type:"Recyclable",
            dispose:"Recycle with paper waste."
        },
        "magazine":{
            type:"Recyclable",
            dispose:"Recycle with paper."
        },
        "cardboard":{
            type:"Recyclable",
            dispose:"Flatten before placing in the recycling bin."
        },
        "pizza box":{
            type:"Recyclable",
            dispose:"Recycle if clean. If greasy, compost or dispose as wet waste."
        },
        "paper cup":{
            type:"Recyclable",
            dispose:"Recycle if clean."
        },
        "paper plate":{
            type:"Recyclable",
            dispose:"Recycle if not food-soiled."
        },
        "notebook":{
            type:"Recyclable",
            dispose:"Recycle after removing plastic covers."
        },
        "office paper":{
            type:"Recyclable",
            dispose:"Place in paper recycling."
        },
        "envelope":{
            type:"Recyclable",
            dispose:"Recycle after removing any plastic window."
        },
    
        // 🍾 Glass
        "glass bottle":{
            type:"Recyclable",
            dispose:"Place in the glass recycling bin."
        },
        "glass jar":{
            type:"Recyclable",
            dispose:"Remove lid and recycle separately."
        },
        "broken glass":{
            type:"Hazardous",
            dispose:"Wrap securely before disposal to prevent injuries."
        },
        "perfume bottle":{
            type:"Recyclable",
            dispose:"Recycle after removing the spray pump if possible."
        },
        "glass cup":{
            type:"Recyclable",
            dispose:"Recycle if accepted by your local recycling program."
        },
    
        // 🥫 Metal
        "aluminium can":{
            type:"Recyclable",
            dispose:"Crush lightly and recycle."
        },
        "tin can":{
            type:"Recyclable",
            dispose:"Clean before recycling."
        },
        "steel can":{
            type:"Recyclable",
            dispose:"Clean before recycling."
        },
        "aluminium foil":{
            type:"Recyclable",
            dispose:"Clean and compress before recycling."
        },
        "beverage can":{
            type:"Recyclable",
            dispose:"Recycle with other metal cans."
        },
    
        // 🍌 Organic
        "banana peel":{
            type:"Biodegradable",
            dispose:"Place in compost or wet waste."
        },
        "apple core":{
            type:"Biodegradable",
            dispose:"Place in compost or wet waste."
        },
        "orange peel":{
            type:"Biodegradable",
            dispose:"Compost or dispose in wet waste."
        },
        "eggshell":{
            type:"Biodegradable",
            dispose:"Crush and add to compost."
        },
        "tea leaves":{
            type:"Biodegradable",
            dispose:"Suitable for composting."
        },
        "coffee grounds":{
            type:"Biodegradable",
            dispose:"Ideal for composting."
        },
        "vegetable waste":{
            type:"Biodegradable",
            dispose:"Place in wet waste or compost."
        },
        "fruit waste":{
            type:"Biodegradable",
            dispose:"Dispose in wet waste or compost."
        },
        "flower waste":{
            type:"Biodegradable",
            dispose:"Compost when possible."
        },
        "bread":{
            type:"Biodegradable",
            dispose:"Dispose in wet waste or compost."
        },
    
        // 🔋 Hazardous
        "battery":{
            type:"Hazardous",
            dispose:"Take to an authorized battery or e-waste collection center."
        },
        "medicine":{
            type:"Medical Waste",
            dispose:"Return to a pharmacy or authorized collection point."
        },
        "paint can":{
            type:"Hazardous",
            dispose:"Take to a hazardous waste collection facility."
        },
        "light bulb":{
            type:"Hazardous",
            dispose:"Dispose through hazardous waste collection."
        },
        "cfl bulb":{
            type:"Hazardous",
            dispose:"Contains mercury. Dispose at a hazardous waste facility."
        },
        "thermometer":{
            type:"Hazardous",
            dispose:"Dispose through hazardous waste collection."
        },
        "aerosol can":{
            type:"Hazardous",
            dispose:"Recycle only if completely empty."
        },
    
        // 💻 E-Waste
        "laptop":{
            type:"E-Waste",
            dispose:"Recycle through an authorized e-waste recycler."
        },
        "mobile phone":{
            type:"E-Waste",
            dispose:"Recycle through certified e-waste facilities."
        },
        "keyboard":{
            type:"E-Waste",
            dispose:"Recycle through an authorized e-waste collection center."
        },
        "mouse":{
            type:"E-Waste",
            dispose:"Recycle through an authorized e-waste collection center."
        },
        "charger":{
            type:"E-Waste",
            dispose:"Dispose at an e-waste collection center."
        },
        "usb drive":{
            type:"E-Waste",
            dispose:"Recycle through an authorized e-waste collection center."
        },
        "earphones":{
            type:"E-Waste",
            dispose:"Recycle through authorized e-waste facilities."
        },
        "power bank":{
            type:"E-Waste",
            dispose:"Contains lithium battery. Dispose at an e-waste collection center."
        },
        "router":{
            type:"E-Waste",
            dispose:"Recycle at a certified e-waste center."
        },
    
        // 👕 Textile
        "old clothes":{
            type:"Reusable",
            dispose:"Donate or recycle through textile collection."
        },
        "shoes":{
            type:"Reusable",
            dispose:"Donate if usable or recycle through textile programs."
        },
        "bag":{
            type:"Reusable",
            dispose:"Donate or recycle if possible."
        },
        "towel":{
            type:"Reusable",
            dispose:"Donate or recycle through textile collection."
        }
    };

    if(item===""){
        result.innerHTML="Please enter a waste item.";
        return;
    }

    if(wasteData[item]){
        result.innerHTML=
        "<h3>"+wasteData[item].type+"</h3>"+
        "<p><strong>Recommended Disposal:</strong><br>"+wasteData[item].dispose+"</p>";
    }else{

    result.innerHTML=
    "<h3>Unknown Waste Item</h3>"+
    "<p>This item is not available in the current prototype database.</p>"+
    "<p><strong>Suggested Action:</strong> Follow your local municipality recycling guidelines or consult an authorized recycling center.</p>";
    }
}
