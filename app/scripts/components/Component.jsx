import React from 'react/addons';

import FormatMixin from 'mixins/FormatMixin.jsx';
import $ from 'jquery';
import moment from 'moment';

var Comment = React.createClass({

  mixins: [
    FormatMixin,
  ],

  getInitialState: function() {
    // let color = '#'+Math.floor(Math.random()*16777215).toString(16);
    // let opacity = Math.random();
    let opacity = (parseInt(this.props.score) / 100);
    if (opacity <= 0) opacity = 0.07;
    // let color = 'rgba(81,155,246,'+opacity+')'; // $blue
    let color = 'rgba(0,0,0,'+opacity+')';

    return {
      visible: false,
      color: color,
      selected: false
    };
  },

  componentDidMount: function() {
  },

  componentWillReceiveProps: function(nextProps) {
    // console.log(nextProps);
  },

  // componentDidUpdate: function() {
    // this.setState({ visible: true });
  // },

  handleOnMouseEnter: function() {
    this.setState({ selected: true });
  },

  handleOnMouseLeave: function() {
    this.setState({ selected: false });
  },

  up: function(e) {
    e.preventDefault();
    if (!this.props.downed && !this.props.upped) {
      this.props.handleCommentUp(this.props.id);
    }
  },

  down: function(e) {
    e.preventDefault();
    if (!this.props.downed && !this.props.upped) {
      this.props.handleCommentDown(this.props.id);
    }
  },

  render: function() {

    // console.log('Render comment');

    let timeAgo = moment(this.props.time).fromNow();
    let style = {
      borderColor: this.state.color
    };

    return (
      <div
        className={"rvc__comment" + (this.state.selected ? ' selected' : '' )}
        data-position={this.props.index}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div
          className="rvc__comment__box"
          style={style}
        >
          <header>
            <div className="rvc__comment__infos">
              <p className="rvc__comment__infos__username">{this.props.username}</p>
              <p className="rvc__comment__infos__time">{timeAgo}</p>
            </div>
            <div className="rvc__comment__votes">
              <a href="" className={"rvc__comment__votes__up" + (this.props.upped ? ' active' : '') } onClick={this.up} >{this.props.up}</a>
              <a href="" className={"rvc__comment__votes__down" + (this.props.downed ? ' active' : '') } onClick={this.down} >{this.props.down}</a>
            </div>
          </header>
          <p className="rvc__comment__message">
            <span className="rvc__comment__message__at">{this.toFormatMinutesSeconds(this.props.at, true)}</span>
            {this.props.message}
          </p>
        </div>
      </div>
    );
  }

});

export default Comment;
