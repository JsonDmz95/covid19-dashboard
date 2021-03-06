import styled from "@emotion/styled";

import search from "../img/search.svg";

const bgWhite = `249,252,255`;
const deepPurple = `36,15,82`;
const purple = `98,54,255`;
const green = `28,177,66`;
const orange = `255,100,0`;
const red = `249,52,94`;
const shadow = `129,124,155`;

export const HeaderContainer = styled.header`
  padding: 10px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 0px 40px 15px;
  }
`;

export const NavLi = styled.li`
  background: rgb(${bgWhite});
  position: relative;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    padding: 10px 40px;
    color: rgba(${deepPurple});

    img {
      margin-bottom: 8px;
    }

    &:hover {
      text-decoration: none;
    }
  }

  &.active {
    &::before,
    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 100px;
      background: rgb(${deepPurple});
      position: absolute;
      bottom: 0px;
      top: auto;
    }

    &::before {
      border-radius: 0px 0px 20px 0px;
      left: -5px;
      right: auto;
    }

    &::after {
      border-radius: 0px 0px 0px 20px;
      right: -5px;
      left: auto;
    }
  }

  @media (min-width: 768px) {
    a {
      padding: 50px 25px;
    }

    &.active {
      &::before,
      &::after {
        width: 120px;
        height: 30px;
        right: 0px;
        left: auto;
      }

      &::before {
        border-radius: 0px 0px 20px 0px;
        top: 0px;
        bottom: auto;
      }

      &::after {
        border-radius: 0px 20px 0px 0px;
        bottom: 0px;
        top: auto;
      }
    }
  }
`;

export const MainTitle = styled.h1`
  font-size: 35px;
  font-weight: 400;
  color: rgb(${deepPurple});
  margin-bottom: 30px;

  b {
    /* display: block; */
    font-weight: 600;
    color: rgb(${purple});
    margin-right: 25px;
  }

  @media (min-width: 7638px) {
    margin-bottom: 50px;
  }
`;

export const GolbalCard = styled.div`
  background: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 10px 10px 30px rgba(${shadow}, 0.15);
  border-radius: 40px;
  min-width: 270px;

  h2 {
    font-size: 18px;
    color: rgba(${deepPurple});
  }

  p {
    font-weight: 600;
    font-size: 40px;
    color: rgb(${purple});
    margin: 0px;
  }

  &.green p {
    color: rgb(${green});
  }

  &.orange p {
    color: rgb(${orange});
  }

  &.red p {
    color: rgb(${red});
  }
  & + div {
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    margin-bottom: 30px;
    & + div {
      margin-top: 0px;
    }
  }

  @media (min-width: 1700px) {
    margin: 0px;
  }
`;

export const BigCard = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 10px 10px 60px rgba(${shadow}, 0.25);
  margin-top: 40px;
  flex: 1;

  .list-countries {
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    padding: 50px;
    display: flex;
    flex-direction: row-reverse;

    .country-info{
      flex: 1;

      img{
        opacity: 0.85
      }
    }
  }

  @media (min-width: 1600px){
    margin-top: 75px;
  }
`;

export const Form = styled.form`
  position: relative;
  input {
    font-size: 14px;
    padding: 15px 15px 15px 60px;
    border-radius: 60px;
    line-height: 1;
    border: none;
    background: rgb(${bgWhite});
    box-shadow: inset 0px 0px 20px rgba(${shadow}, 0.15);
    outline: none;
    /* width: 290px; */
    width: 100%;

    ::placeholder {
      color: rgba(${deepPurple}, 0.5);
    }
  }
  &::before {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    background: url(${search});
    position: absolute;
    top: 15px;
    bottom: auto;
    left: 20px;
    right: auto;
    pointer-events: none;
  }
`;

export const CardHeader = styled.div`
  padding: 0px;
  background: transparent;
  border: none;

  &::hover,
  &:active,
  &:focus {
    text-decoration: none !important;
    outline: none;
    &::hover,
    &:active,
    &:focus {
      text-decoration: none !important;
      outline: none;
    }
  }

  &:first-of-type {
    border-radius: 0px;
  }

  .card-link {
    display: block;
    padding: 10px 0px 10px 20px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(${purple});
  }
`;

export const CountryPreviewItem = styled.a`
  display: block;
  padding: 15px 20px;
  color: rgb(${deepPurple});
  cursor: pointer;

  .header{
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  p{
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const EmptyMessage = styled.p`
  margin-bottom: 0px;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  /* text-transform: uppercase; */
  line-height: 1.5;
  color: rgb(${red});
`;

export const CountryInfo = styled.div`
  padding-bottom: 30px;

  .country-name{
    font-size: 36px;
    text-transform: uppercase;
    margin-bottom: 0px;
  }

  .country-continent{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .updated{
    margin-bottom: 0px;
    font-size: 14px;

    b{
      font-weight: 600;
    }
  }

  .data-container{
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    .data-item{
      .data-title{
        font-size: 16px;
        font-weight: 600;
        display: block;
        margin-bottom: 8px;
      }

      .data-quantity{
          font-size: 35px;

          &.purple{
            color: rgb(${purple});
          }
          &.green{
            color: rgb(${green});
          }
          &.orange{
            color: rgb(${orange});
          }
          &.red{
            color: rgb(${red});
          }
        }
    }
  }

  @media (min-width: 768px){
    padding-bottom: 0px;
    padding-left: 20px;
  }

  @media (min-width: 992px){
    padding-left: 30px;
  }

  @media (min-width: 1200px){
    padding-left: 50px;
  }
`;