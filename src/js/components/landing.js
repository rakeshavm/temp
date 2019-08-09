import React from 'react';
import './../../css/landing.css';
import './dots.css'

// import logo from './../../svg/poly.svg';
class Landing extends React.Component{

    componentDidMount(){

        

            // 'use strict';
        
            function extend( a, b ) {
                for( var key in b ) { 
                    if( b.hasOwnProperty( key ) ) {
                        a[key] = b[key];
                    }
                }
                return a;
            }
        
            function DotNav( el, options ) {
                this.nav = el;
                this.options = extend( {}, this.options );
                extend( this.options, options );
                this._init();
            }
        
            DotNav.prototype.options = {};
        
            DotNav.prototype._init = function() {
                // special case "dotstyle-hop"
                var hop = this.nav.parentNode.className.indexOf( 'dotstyle-hop' ) !== -1;
        
                var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;
        
                dots.forEach( function( dot, idx ) {
                    dot.addEventListener( 'click', function( ev ) {
                        ev.preventDefault();
                        if( idx !== current ) {
                            dots[ current ].className = '';
        
                            // special case
                            if( hop && idx < current ) {
                                dot.className += ' current-from-right';
                            }
        
                            setTimeout( function() {
                                dot.className += ' current';
                                current = idx;
                                if( typeof self.options.callback === 'function' ) {
                                    self.options.callback( current );
                                }
                            }, 25 );                        
                        }
                    } );
                } );
            }
        
            // add to global namespace
            window.DotNav = DotNav;

            [].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
                new DotNav( nav, {
                    callback : function( idx ) {
                    }
                } );
            } );
        
        

        
    }

    
    
    renderDots(){

        return(
            <div className="dotstyle dotstyle-dotmove">
            <ul>
                <li className="current"><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            
            </ul>
        </div>
        )
    }


   render = ()=>{
       return(
           <div className="landing">
               {/* <Sidebar/> */}
               {/* {this.renderDots()} */}
               {/* <PolyComp/> */}
           </div>
       )
   }
}
export default Landing;