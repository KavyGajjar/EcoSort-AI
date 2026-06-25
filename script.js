function classifyWaste(){
    const item=document.getElementById("itemInput").value.toLowerCase().trim();
    const result=document.getElementById("result");

    const wasteData={

        // Plastic
        "plastic bottle":{
            type:"Recyclable",
            dispose:"Rinse and place in the plastic recycling bin."
        },
        "plastic container":{
            type:"Recyclable",
            dispose:"Clean before placing in the recycling bin."
        },
        "plastic bag":{
            type:"Recyclable",
            dispose:"Deposit at a plastic collection or recycling center."
        },

        // Paper
        "newspaper":{
            type:"Recyclable",
            dispose:"Recycle with paper waste."
        },
        "cardboard":{
            type:"Recyclable",
            dispose:"Flatten before placing in the recycling bin."
        },
        "paper":{
            type:"Recyclable",
            dispose:"Recycle if clean and dry."
        },
        "magazine":{
            type:"Recyclable",
            dispose:"Place in the paper recycling bin."
        },

        // Glass
        "glass bottle":{
            type:"Recyclable",
            dispose:"Place in the glass recycling bin."
        },
        "glass jar":{
            type:"Recyclable",
            dispose:"Remove lid and recycle separately."
        },

        // Metal
        "aluminium can":{
            type:"Recyclable",
            dispose:"Crush lightly and recycle."
        },
        "steel can":{
            type:"Recyclable",
            dispose:"Clean before recycling."
        },
        "tin can":{
            type:"Recyclable",
            dispose:"Dispose in the metal recycling bin."
        },

        // Organic
        "banana peel":{
            type:"Biodegradable",
            dispose:"Put into a compost or wet waste bin."
        },
        "apple peel":{
            type:"Biodegradable",
            dispose:"Dispose in compost."
        },
        "vegetable waste":{
            type:"Biodegradable",
            dispose:"Place in the wet waste bin."
        },
        "food waste":{
            type:"Biodegradable",
            dispose:"Dispose in compost or wet waste."
        },
        "tea leaves":{
            type:"Biodegradable",
            dispose:"Suitable for composting."
        },
        "egg shell":{
            type:"Biodegradable",
            dispose:"Add to compost."
        },
        "coffee grounds":{
            type:"Biodegradable",
            dispose:"Use for compost or gardening."
        },

        // Electronic & Hazardous
        "battery":{
            type:"Hazardous",
            dispose:"Take to an authorized e-waste collection center."
        },
        "mobile phone":{
            type:"E-Waste",
            dispose:"Recycle through certified e-waste facilities."
        },
        "charger":{
            type:"E-Waste",
            dispose:"Dispose at an e-waste collection center."
        },
        "laptop":{
            type:"E-Waste",
            dispose:"Give to an authorized e-waste recycler."
        },
        "bulb":{
            type:"Hazardous",
            dispose:"Dispose through hazardous waste collection."
        },
        "tube light":{
            type:"Hazardous",
            dispose:"Contains mercury. Do not throw into normal bins."
        },

        // Medical
        "medicine":{
            type:"Medical Waste",
            dispose:"Return to a pharmacy or authorized collection point."
        },
        "syringe":{
            type:"Medical Waste",
            dispose:"Dispose in a biomedical waste facility."
        },
        "mask":{
            type:"Medical Waste",
            dispose:"Seal before disposing according to local guidelines."
        },

        // Textile
        "old clothes":{
            type:"Reusable",
            dispose:"Donate or send for textile recycling."
        },
        "shoes":{
            type:"Reusable",
            dispose:"Donate if usable or recycle through textile programs."
        },

        // Garden
        "dry leaves":{
            type:"Biodegradable",
            dispose:"Compost or use as mulch."
        },
        "grass":{
            type:"Biodegradable",
            dispose:"Place in garden waste or compost."
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
        "<h3>IBM Granite AI Suggestion</h3>"+
        "<p>This prototype does not contain this waste item yet.</p>"+
        "<p>Suggested Action: Follow your local municipality recycling guidelines or consult an authorized recycling center.</p>";
    }
}
