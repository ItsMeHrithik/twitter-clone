import React, { Component } from 'react'

export default class CreateTweet extends Component {
    render() {
        return (
            <form>
                <h2>Tweet your thoughts</h2>
                <textarea cols="90" rows="2"></textarea>
                <button>Submit</button>
            </form>
        )
    }
}
