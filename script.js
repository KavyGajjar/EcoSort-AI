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

        // Additional Plastic
        "toothpaste tube":{
            type:"Recyclable",
            dispose:"Clean and recycle if accepted locally."
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
        
        // Additional Paper
        "magazine":{
            type:"Recyclable",
            dispose:"Recycle with paper."
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
            dispose:"Recycle after removing plastic cover."
        },
        "office paper":{
            type:"Recyclable",
            dispose:"Place in paper recycling."
        },
        "envelope":{
            type:"Recyclable",
            dispose:"Recycle after removing plastic window."
        },
        
        // Additional Glass
        "broken glass":{
            type:"Hazardous",
            dispose:"Wrap safely before disposal."
        },
        "perfume bottle":{
            type:"Recyclable",
            dispose:"Recycle after removing pump."
        },
        "glass cup":{
            type:"Recyclable",
            dispose:"Recycle if accepted locally."
        },
        
        // Additional Metal
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
            dispose:"Recycle with metal."
        },
        
        // Additional Organic
        "orange peel":{
            type:"Biodegradable",
            dispose:"Compost or wet waste."
        },
        "coffee grounds":{
            type:"Biodegradable",
            dispose:"Ideal for compost."
        },
        "fruit waste":{
            type:"Biodegradable",
            dispose:"Dispose in wet waste."
        },
        "flower waste":{
            type:"Biodegradable",
            dispose:"Compost."
        },
        "bread":{
            type:"Biodegradable",
            dispose:"Dispose in wet waste."
        },
        
        // Additional Hazardous
        "cfl bulb":{
            type:"Hazardous",
            dispose:"Contains mercury. Use hazardous waste collection."
        },
        "thermometer":{
            type:"Hazardous",
            dispose:"Dispose through hazardous waste collection."
        },
        "aerosol can":{
            type:"Hazardous",
            dispose:"Recycle only if completely empty."
        },
        
        // Additional E-Waste
        "usb drive":{
            type:"E-Waste",
            dispose:"Take to an e-waste collection center."
        },
        "earphones":{
            type:"E-Waste",
            dispose:"Recycle through authorized e-waste facilities."
        },
        "power bank":{
            type:"E-Waste",
            dispose:"Contains lithium battery. Dispose at e-waste center."
        },
        "router":{
            type:"E-Waste",
            dispose:"Recycle at certified e-waste center."
        },
        
        // Additional Textile
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
