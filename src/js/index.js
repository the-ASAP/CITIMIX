import * as $ from 'jquery';
import '../scss/index.scss';
import header from '../components/header.html';
import customer from '../components/customer.html';
import data from '../components/data.html';
$(() => {
  $('#root').prepend(data);
  $('#root').prepend(customer);
  $('#root').prepend(header);
});
