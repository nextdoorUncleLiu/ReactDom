import React,{Component} from 'react';
import {render} from 'react-dom';
let uuid = require('uuid');

export class RightCont extends Component {
	constructor(){
		super();
	}
	/**
	 * [saveBtn 保存按钮]
	 */
	saveBtn(){
		let oResf = this.refs;
		let tit = oResf.tit.value;
		let cont = oResf.cont.value;
		if(tit != '' && cont != ''){
			let propsFn,id;
			if(oResf.saveBtn.id){
				propsFn = this.props.updateArticle;
				id = oResf.saveBtn.id;
			}
			else {
				propsFn = this.props.addArticle;
				id = uuid.v4();
			}
			propsFn({
				id:id,
				title:tit,
				contents:cont,
				time:new Date()
			})
		}
		this.props.clearArticle();
	}
	/**
	 * [componentWillReceiveProps 获取新的prop属性]
	 * @param  {object} oNextProps [新的prop属性]
	 */
	componentWillReceiveProps(oNextProps){
		this.refs.tit.value = oNextProps.curViewData.title;
		this.refs.cont.value = oNextProps.curViewData.contents;
	}
	render(){
		return (
			<div className="rightCont">
				<button className="saveBtn" ref="saveBtn" id={this.props.curViewData.id} onClick={this.saveBtn.bind(this)}>保存</button>
				<button className="clearBtn" ref="clearBtn" onClick={this.props.hideRightCont}>取消</button>
				<input className="title" ref="tit" placeholder="这是标题" defaultValue={this.props.curViewData.title} />
				<textarea rows="3" cols="20" className="contents" ref="cont" placeholder="这是内容" defaultValue={this.props.curViewData.contents}></textarea>
			</div>
		)
	}
}