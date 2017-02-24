import React,{Component} from 'react';
import {Render} from 'react-dom';

export class LeftMenu extends Component {
	constructor(){
		super();
	}
	/**
	 * [getCurData 获取当前的数据]
	 * @param  {object} oObj [当前点击的对象]
	 * @param  {string} sKey [当前对象的key]
	 */
	getCurData(oObj,sKey){
		this.props.viewArticle(oObj,sKey);
	}
	render(){
		const _self = this;
		return (
			<div className="leftMenu">
				<button onClick={this.props.viewRightCont}>添加新的文章</button>
				<ul>
					{this.props.list.map(function(key,val){
						return (
								<li ref={val} key={val} onClick={_self.getCurData.bind(_self,key)}>{key.title}</li>
							)
					})}
				</ul>
			</div>
		);
	}
}
