const spaceID = "asxeplbk94nd";
const envID = "master";
const accessToken = "2-H3aef0a1zHuL3uEDaeTeboTc9iJv4NFkFxZZ3SRsQ";
const url = `https://cdn.contentful.com/spaces/${spaceID}/environments/${envID}/entries?access_token=${accessToken}`;

//console.log(url)

const runContentfulOnLoad = () => {

  let container = document.querySelector("div.container");
  //console.log(container.classList)
  if (container.classList.contains("sketchbook-container")) {

    const grabData = function () {
      return fetch(url)
        .then((response) => response.json()) //turn the response into a json object
        .then((data) => {
          const assets = data.includes.Asset;
          //turn the contenful data into something useable for the page
          return data.items.map((item) => {
            const imageId = item.fields.pageImg.sys.id;
            let imageUrl;
            const imgData = assets.find((asset) => {
              return asset.sys.id == imageId;
            });
            imageUrl = imgData.fields.file.url;

            item.fields.pageImg = imageUrl;

            return item.fields;
          }); //this now returns an array of the page images only
        });
    };

    //run grabData on load
    grabData().then((data) => {
      //in here, do something with the returned data
      data.forEach((item) => {
        let img = document.createElement("img"); //create the image element
        img.src = item.pageImg; //add image source

        let div = document.createElement("div"); //create the div element
        div.classList.add("page"); //add a page class
        div.appendChild(img);
        container.appendChild(div);
        //console.log(div)
      });
    });
  } else{
    //console.log("not the sketch page")
    return false;
  }
};

//runContentfulOnLoad();
