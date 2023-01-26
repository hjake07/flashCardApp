import './App.css';
import StudyRooms from './studyRoom';
import InputSection from './input.js'
import Card from './card';
import NextArrow from './nextArrow';
import { useState } from 'react';
let count = 0;
function App() {
// let cardArray = [
// <Card title={newCard1.acronym} subtitle={newCard1.name} description={newCard1.summary} style={isActive} changeStyle={implementStyle}/>,
// <Card title={newCard2.acronym} subtitle={newCard2.name} description={newCard2.summary} style={isActive} changeStyle={implementStyle}/>,
// <Card title={newCard3.acronym} subtitle={newCard3.name} description={newCard3.summary} style={isActive} changeStyle={implementStyle}/>
// ]
const [isActive1, setIsActive1] = useState('dnone')
const [isActive2, setIsActive2] = useState('dnone')
const [isActive3, setIsActive3] = useState('dnone')
const [isVisible, setIsVisible] = useState('card')

const implementStyle1 = ()=>{
  setIsActive1('dblock')
}
const implementStyle2 = ()=>{
  setIsActive2('dblock')
}
const implementStyle3 = ()=>{
  setIsActive3('dblock')
}
  const awsCards = {
    aws: {
        acronym: 'AWS',
        name: 'Amazon Web Services',
        summary: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster."
    },
    s3 : {
        acronym:'S3',
        name: 'Super Simple Storage',
        summary: "Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its e-commerce network."
    },
    ec2 : {
        acronym: 'EC2',
        name: 'Elastic Cloud Computing',
        summary: "Amazon Elastic Compute Cloud is a part of Amazon.com's cloud-computing platform, Amazon Web Services, that allows users to rent virtual computers on which to run their own computer applications."
    },
    iam : {
        acronym: 'IAM',
        name: "Identity and Access Management",
        summary: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. With IAM, you can centrally manage permissions that control which AWS resources users can access. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources."
    },
    vpc: {
        acronym: 'VPC',
        name: "Virtual Private Cloud",
        summary: "Amazon Virtual Private Cloud is a commercial cloud computing service that provides users a virtual private cloud, by “provisioning a logically isolated section of Amazon Web Services Cloud”. Enterprise customers are able to access the Amazon Elastic Compute Cloud over an IPsec based virtual private network. "
    },
    efs: {
      acronym: 'EFS',
      name: "Elastic File System",
      summary: "Amazon Elastic File System (Amazon EFS) is a simple, serverless, set-and-forget, elastic file system. There is no minimum fee or setup charge. You pay only for the storage you use, for read and write access to data stored in Infrequent Access storage classes, and for any provisioned throughput."
    }
}
const [newCard1, setNewCard1] = useState(awsCards.aws)
const [newCard2, setNewCard2] = useState(awsCards.s3)
const [newCard3, setNewCard3] = useState(awsCards.ec2)
function clickNext(){
  setIsActive1('dnone')
  setIsActive2('dnone')
  setIsActive3('dnone')
  count++
  if(count ===1){
    setNewCard1(awsCards.iam)
    setNewCard2(awsCards.vpc)
    setNewCard3(awsCards.efs)
    setIsVisible('card')
  }
  else if(count <= 2){
    setIsVisible('dnone')
  }

}

  return (
  <div className='App'>
    <StudyRooms/>
    <div className="columnize">
      <InputSection/>
      <div className='rowize'>
      <Card title={newCard1.acronym} subtitle={newCard1.name} description={newCard1.summary} style={isActive1} changeStyle={implementStyle1} containerStyle={isVisible}/>,
      <Card title={newCard2.acronym} subtitle={newCard2.name} description={newCard2.summary} style={isActive2} changeStyle={implementStyle2} containerStyle={isVisible}/>,
      <Card title={newCard3.acronym} subtitle={newCard3.name} description={newCard3.summary} style={isActive3} changeStyle={implementStyle3} containerStyle={isVisible}/>
        <NextArrow onclick={clickNext}/>
        </div>
    </div>
   
  </div>
      

  );
}

export default App;
