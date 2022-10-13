import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  constructor() { }


  friendsData:any=[{"_id":"628613a5fb68dd10d6f53366","name":"RAHUL","friendName":"RAMESH","friendNickName":"RAMU","DescribeYourFriend":"Test description","__v":0},{"_id":"62863eb472b33daf7a22b7d5","name":"hhjs","friendName":"sjhq","friendNickName":"wdhd","__v":0},{"_id":"62864e10d5446187887e5f63","name":"Amritha","friendName":"Revathy","friendNickName":"Revu","DescribeYourFriend":"pretty","__v":0},{"_id":"62864eafd5446187887e64b9","name":"Remya","friendName":"Malavika","friendNickName":"Malu","DescribeYourFriend":"Beautiful","__v":0}]

  ngOnInit(): void {
  }

}
