import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postsArray: any = [];
  singlePost; singlePostObj;
  title: any;
  body: any;
  userId: any;itemId; itemObject = {};
// tslint:disable-next-line: variable-name
  constructor(private _service: ApiService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._service.getApiCall('posts')
    .subscribe(data => {
      this.postsArray = data;
      this.singlePost = false;
      console.log(data);
    }, error => {
      alert(error.message);
    });
  }

  getSinglePost(id) {
    this._service.getApiCall('posts/' + id )
    .subscribe(data => {
      this.singlePostObj = data;
      this.singlePost = true;
    });
  }

  addPost() {
    const jsonBody = {};
    jsonBody['title'] = this.title;
    jsonBody['body'] = this.body;
    jsonBody['userId'] = this.userId;

    this._service.postApiCall('posts',jsonBody)
    .subscribe(data => {
      jQuery('#addModal').modal('hide');
    });
  }

  putData(id, item){
    this.itemId = id;
    this.itemObject = item;
  }

  putPost() {
    const jsonBody = {};
    jsonBody['id'] = this.itemId;
    jsonBody['title'] = this.itemObject['title'];
    jsonBody['body'] = this.itemObject['body'];
    jsonBody['userId'] = this.itemObject['userId'];

    this._service.putApiCall
    ('posts/' + this.itemId, jsonBody)
    .subscribe(data => {
      console.log(jsonBody,data)
      jQuery('#putModal').modal('hide');
    });
  }

  patchPost() {
    const jsonBody = {};
    jsonBody['id'] = this.itemId;
    jsonBody['title'] = this.itemObject['title'];

    this._service.patchApiCall
    ('posts/' + this.itemId, jsonBody)
    .subscribe(data => {
      console.log(jsonBody,data)
      jQuery('#patchModal').modal('hide');
    });
  }

  deleteData(id) {
    this._service.deleteApiCall('posts/' + id )
    .subscribe(data => {
      console.log(data);
    });
  }

}
