const jsondata = {
    "_id": {
        "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
        "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
        "Bare minimum knowledge of project management",
        "4SA Concept",
        "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
        "An open mind to learn any concept",
        "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                    "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }
            ]
        }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
}


let exploreDiv = document.getElementsByClassName("explore")[0];
const task = jsondata.tasks[0];

let assetsDiv = document.getElementsByClassName("assetsContainer")[0];

task.assets.forEach(item => {
    assetsDiv.innerHTML +=
        `<div class="asset">
                <div class="heading">
                    <p>${item.asset_title}</p>
                    <img height="22px" src="./public/iButton.png" alt="">
                </div>
                <p class="desc"><b>Description:</b> ${item.asset_description}</p>
                <div class="content">
                ${item.asset_content_type === "video" ? `
                <iframe width="630" height="380" src=${item.asset_content} frameborder="0" allowfullscreen></iframe>` : item.asset_content_type === "threadbuilder" ? `
                <div class="thread">
                   <div id="head">
                     <img id="ThreadArrow" height="16px" src="./public/arrow.png"  alt="">
                     <p><b>Thread A</b></p>
                   </div>
                   <div class="threadContent expanded">
                   <div class="top">
                   <div class="subIcons">
                     <div class="sub-thread">
                       <div class="header">Sub thread 1</div>
                         <div class="text">
                           <p>Enter Text here</p>
                         </div>
                     </div>
                     <div class="groupIcons">
                     <img height="22px" src="./public/bulb.png" alt=""> 
                     <img height="22px" src="./public/chat.png" alt=""> 
                     <img height="22px" src="./public/query.png" alt=""> 
                     <img height="22px" src="./public/flower.png" alt=""> 
                     </div>
                   </div>
                   <div class="subSelect">
                     <div class="sub-thread">
                       <div class="header">Sub Interpretation 1</div>
                         <div class="text">
                           <p>Enter Text here</p>
                         </div>
                     </div>
                     <div class="select-container">
                       <div class="custom-select">
                        <select>
                            <option value="" disabled selected>Select Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                        </select>
                       </div>
                       <div class="custom-select">
                        <select>
                            <option value="" disabled selected>Select Process</option>
                            <option value="1">Process 1</option>
                            <option value="2">Process 2</option>
                            <option value="3">Process 3</option>
                        </select>
                       </div>
                     </div>
                   </div>
                   </div>
                   <div class="summary">
                   <button>+ Sub Thread</button>
                   <div class="summaryThread">
                       <div class="summaryHeader">Sub thread 1</div>
                         <div class="text">
                           <p>Enter Text here</p>
                         </div>
                     </div>
                   </div>
                   </div>
                </div>` : item.asset_id === 18885 ? `
                <hr>
                <div class="titleContent">
                    <div class="title">
                        <p><b>Title</b></p>
                        <input type="text" />
                    </div>
                    <div class="content">
                        <p><b>Content</b></p>
                        <div class="menuOptions">
                            <div class="menu">
                                <p>File</p>
                                <p>Edit</p>
                                <p>View</p>
                                <p>Insert</p>
                                <p>Format</p>
                                <p>Tools</p>
                                <p>Table</p>
                                <p>Help</p>
                            </div>
                            <div class="options">
                                <img height="25px" src="./public/arrow-curve-left-right.png" alt="" />
                                <img height="25px" src="./public/arrow-curve-left-down.png" alt="" />
                                <img height="25px" src="./public/arrow-expand-02.png" alt="" />
                                <input type="text" placeholder="Paragraph"/>
                                <img src="./public/threedotHorizontal.png" alt="" />
                            </div>
                            <div class="white"></div>
                        </div>
                    </div>
                </div>
                `
            : `
            <div class="container">
        <div class="section">
            <div class="section-header" onclick="toggleSection(this)">
            <span class="arrow">&#11205;</span>
                <h2>Introduction</h2>
                
            </div>
            <div class="content">
                <p>The 4SA Method, How to bring an idea into progress?</p>
                <span class="see-more">See More</span>
            </div>
        </div>
        <div class="section">
            <div class="section-header" onclick="toggleSection(this)">
            <span class="arrow">&#11205;</span>
                <h2>Thread A</h2>
                
            </div>
            <div class="content">
                <p>How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?</p>
                <span class="see-more">See More</span>
            </div>
        </div>
        <div class="section">
            <div class="section-header" onclick="toggleSection(this)">
            <span class="arrow">&#11205;</span>
                <h2>Example 1</h2>
                
            </div>
            <div class="content">
                <p>You have a concept, how will you put it into progress?</p>
            </div>
        </div>
    </div>
            `
        }
                </div>
            </div>`
});

exploreDiv.innerHTML = `
<p id="bold">${task.task_title}<p>
  <p>${task.task_description}</p>
`


let threadArrow = document.getElementById('ThreadArrow');
threadArrow.addEventListener('click', function () {
    const threadContent = document.querySelector('.threadContent');
    if (threadContent.classList.contains('collapsed')) {
        threadContent.classList.remove('collapsed');
        threadContent.classList.add('expanded');
        threadArrow.style.transform = "rotate(360deg)"
    } else {
        threadContent.classList.remove('expanded');
        threadContent.classList.add('collapsed');
        threadArrow.style.transform = "rotate(180deg)"
    }
});

function toggleSection(element) {
    const section = element.parentElement;
    section.classList.toggle('hide');
}

const arrow = document.getElementById('sidebarArrow');


var elements = document.getElementsByClassName("sidebar");
arrow.addEventListener("click", () =>{
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.left = "-200px";
        arrow.style.transform = "rotate(180deg)"
    }
})
