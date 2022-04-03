import React from "react"

const DeleteIcon = props => (
  <svg width={props?.size || "64"} height={props?.size || "64"} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={props?.color || "#134563"} d="M24.5 22.8999H27.5V46.8999H24.5V22.8999Z" />
    <path fill={props?.color || "#134563"} d="M30.5 22.8999H33.5V46.8999H30.5V22.8999Z" />
    <path fill={props?.color || "#134563"} d="M36.5 22.8999H39.5V46.8999H36.5V22.8999Z" />
    <path fill={props?.color || "#134563"} d="M12.5 13.8999H51.5V16.8999H12.5V13.8999Z" />
    <path fill={props?.color || "#134563"} d="M39.4001 15.4H36.6001V12.4C36.6001 11.5 35.9001 10.8 35.0001 10.8H29.0001C28.1001 10.8 27.4001 11.5 27.4001 12.4V15.4H24.6001V12.4C24.6001 9.99999 26.6001 8 29.0001 8H35.0001C37.4001 8 39.4001 9.99999 39.4001 12.4V15.4Z" />
    <path fill={props?.color || "#134563"} d="M41 55.9H23C20.6 55.9 18.5 53.9 18.3 51.5L15.5 15.5L18.5 15.3L21.3 51.3C21.4 52.2 22.2 52.9 23 52.9H41C41.9 52.9 42.7 52.1 42.7 51.3L45.5 15.3L48.5 15.5L45.7 51.5C45.5 54 43.4 55.9 41 55.9Z" />
  </svg>
)

export default DeleteIcon;
