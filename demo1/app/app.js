import React,{Component} from 'react';
import {LeftMenu,Asd} from './components/leftMenu.js';
import {RightCont} from './components/rightCont.js';
import {render} from 'react-dom';
import $ from 'jquery';

class AjaxData {
	constructor(){
		this.promise = Promise.resolve($.ajax(__dirname + './build/json/data.json'));
	}
}
let ajaxData = new AjaxData();

class Comment extends Component {
	constructor(props){
		super();
		this.state = {
			list:props.data,
			curViewData:{
				title:'',
				contents:'',
				time:''
			},
			bool:false
		};
	}
	/**
	 * [viewRightCont 显示右侧内容]
	 */
	viewRightCont(){
		this.clearArticle();
		this.setState({
			bool:true
		})
	}
	/**
	 * [hideRightCont 隐藏右侧内容]
	 */
	hideRightCont(){
		this.setState({
			bool:false
		})
	}
	/**
	 * [addArticle 添加内容]
	 * @param {object} oArg [添加的新内容]
	 */
	addArticle(oArg){
		this.state.list.push(oArg);
		this.setState({
			list:this.state.list
		})
	}
	/**
	 * [clearArticle 清空当前显示内容]
	 */
	clearArticle(){
		this.state.curViewData = {
			id:'',
			title:'',
			contents:'',
			time:''
		};
	}
	/**
	 * [updateArticle 更新内容]
	 * @param  {number} nId [更新内容的id]
	 */
	updateArticle(oArg){
		this.state.list.map(function(oCurObj,nIndex,aArr){
			if(oCurObj.id && oCurObj.id == oArg.id){
				for(var sKey in oCurObj){
					oCurObj[sKey] = oArg[sKey];
				}
			}
		});
		this.setState({
			list:this.state.list
		})
	}
	/**
	 * [viewArticle 显示内容]
	 * @param  {object} oArg [显示的内容]
	 */
	viewArticle(oArg){
		this.state.curViewData = oArg;
		this.setState({
			bool:true
		})
	}
	/**
	 * [render 渲染组件]
	 */
	render(){
		let viewDom;
		if(this.state.bool){
			viewDom = <RightCont ref="rightCont" {...this.state} updateArticle={this.updateArticle.bind(this)} clearArticle={this.clearArticle.bind(this)} addArticle={this.addArticle.bind(this)} hideRightCont={this.hideRightCont.bind(this)} />
		}
		return (
				<div className="main">
					<LeftMenu ref="leftMenu" {...this.state} viewArticle={this.viewArticle.bind(this)} viewRightCont={this.viewRightCont.bind(this)} />
					{viewDom}
				</div>
			)
	}
}

ajaxData.promise.then(function(arg){
	render(<Comment {...arg} />,document.querySelector('#comment'));
},function(arg){
	console.log(arg);
})
