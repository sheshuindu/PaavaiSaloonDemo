let questions = [
    "Are you currently working?",
    "Are you comfortable in working in a systematic and process oriented environment?",
    "Do you have a desire to establish a business on your own basis?",
    "Are you a team player and have good people management skills?",
    "Have you ever owned a business before?",
]

let yesRes = [
    "Congrats on your aspirations of becoming an entrepreneur! It is very much possible to manage your profession and dream of running your own business, because Green Trends Salon follows the manager-run model, and hence do not require the franchisee to be present in the salon on a daily basis.",
    "That's great! Green Trends is operated following a robust process. It is very necessary our franchisee operates the salon based on guidelines laid down by the brand.",
    "A desire to put efforts to establish something on one's own is very necessary to become a successful entrepreneur. Becoming a Green Trends franchise can provide you with an opportunity to set up and establish a successful venture on your own.",
    "That's half the battle won, a salon business is people oriented business. If you have recruited, trained, retained and understood your staff challenges and strengths, then this opportunity is the perfect fit for you.",
    "Business acumen is a big strength, when you enter into a new business. You do not necessarily need to know anything about the salon industry. We will educate you with all the knowledge that is required to manage the business, but we know we can count on your business sense to take the business forward!",
]

let noRes = [
    "If you are not working currently, we hope you realize that, it is of vital importance to have enough resources as a back up to support you during your initial stages of business set up.",
    "If you're not comfortable following established systems, becoming a Green Trends franchisee may not be the best way forward for you. You might be very entrepreneurial by nature, but it is extremely important for a franchise to follow norms and process defined by the brand. Process and procedures are followed with utmost adherence, to ensure consistency of brand experience across all franchisees",
    "Not to worry..You are not entirely alone in this venture. Green trends offers training and support to all our franchisees. However, success depends a lot on how much effort you put to use the knowledge provided by us in making your venture successful.",
    "To become a successful franchise of a salon brand, you must possess people skills apart from networking skills. Connecting with employees motivating them is very essential to succeed.",
    "No worries! If this is your first foray into running a business, we understand your anxiety. We will work closely with you and guide you in every aspect of managing the business. whats more! Most Green trends franchisees are getting into a business model for the first time.",
]

let yes = 0
let no = 0

const quiz = (i) => {
    
    let flag = 0
    const DOMques = document.getElementById('ques')
    const q = document.createElement('p')
    const ques = document.createTextNode(questions[i])
    q.appendChild(ques)
    DOMques.appendChild(q)
    q.setAttribute('id','question')

    const yesButton = document.createElement('button')
    yesButton.textContent = 'Yes'
    q.appendChild(yesButton)
    yesButton.setAttribute('id', 'yesBtn')

    const noButton = document.createElement('button')
    noButton.textContent = 'No'
    q.appendChild(noButton)
    noButton.setAttribute('id', 'noBtn')


    const response = document.getElementById('res')

    const createResponse = (arr) => {

        response.innerHTML = ''
        const res = document.createElement('p')
        const resText = document.createTextNode(arr[i])
        res.setAttribute('id','response')
        res.appendChild(resText)
        response.appendChild(res)
        createNext()
    }

    yesButton.onclick = () => {
        if(flag === 0){
            createResponse(yesRes)
            yes++
            flag = 1
        }
        
    }

    noButton.onclick = () => {
        if(flag === 0){
            createResponse(noRes)
            no++
            flag = 1
        }
    }

    const createNext = () => {
        var next = document.createElement("button");
        next.textContent = "Next";
        next.setAttribute("id", "button");
        response.appendChild(next);
        next.onclick = () => {
            i++;
            if (i < questions.length) {
                document.getElementById("ques").innerHTML = "";
                document.getElementById("res").innerHTML = " ";
                quiz(i);
            } else {
                document.getElementById("ques").innerHTML = "";
                document.getElementById("res").innerHTML = " ";

                if (yes > no) {
                    var r = document.createElement("p");
                    var res = document.createTextNode(
                        "You have the potential to be a great fit as a Green Trends franchisee! We encourage you to take the next step by calling us at 9600046433          "
                    );
                    r.setAttribute('id','finalres')
                    r.appendChild(res);
                    DOMques.appendChild(r);
                } else {
                    var r = document.createElement("p");
                    var res = document.createTextNode(
                        "Perhaps Green Trends franchising isn't the right fit for you right now. We highly encourage you to discuss your queries with our franchisee management team @ 9600046433. If you would like us to reach you, please click below"
                    );
                    r.setAttribute('id', 'finalres')
                    r.appendChild(res);
                    DOMques.appendChild(r);
                }
            }
        };
    };


}

quiz(0)