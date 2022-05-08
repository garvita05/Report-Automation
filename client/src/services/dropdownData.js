import React, { useState } from "react";

export const courseNameItems = (item) => {
  // { id: 1, title: "Fundamentals Of Distributed And Cloud Computing" },
  // { id: 2, title: "Computer Networks And Internet Of things" },
  // { id: 3, title: "Marketing Management" },
  // { id: 4, title: "Artificial Intelligence" },
  // { id: 5, title: "Software Engineering" },
  // { id: 6, title: "Physics-2" },
  console.log(item);
  var bucket = [];
  // bucket.push(courses_dict?.item?.course_name);
  return bucket;
};

export const courseCodeItems = () => [
  //var bucket = [
  { id: 1, title: "123456" },
  { id: 2, title: "123457" },
  { id: 3, title: "123458" },
  //  { id: 4, title: "78GHTY1" },
  //  { id: 5, title: "17HJ890" },
  // 123456, 123457, 123458,
  //];

  //return bucket;
];
export const courses_dict = {
  123456: {
    course_code: "123456",
    course_name: "software eng.",
    course_credits: "4",
    contact_hours: "4",
    Branch: "CSE/IT",
    course_outcome: [
      { index: "1", Description: "its a co1", cognitive_level: "co1" },
      { index: "2", Description: "its a co2", cognitive_level: "co2" },
      { index: "3", Description: "its a co3", cognitive_level: "co3" },
      { index: "4", Description: "its a co4", cognitive_level: "co4" },
    ],
    faculty_table: [
      {
        faculty_name: "bhawna",
        faculty_subject: "software eng.",
        faculty_id: "123",
        department: "CSE/IT",
      },
      {
        faculty_name: "amit",
        faculty_subject: "software eng.",
        faculty_id: "124",
        department: "CSE/IT",
      },
      {
        faculty_name: "seema",
        faculty_subject: "software developement",
        faculty_id: "125",
        department: "CSE/IT",
      },
      {
        faculty_name: "aneeta",
        faculty_subject: "software fundamentals",
        faculty_id: "126",
        department: "CSE/IT",
      },
      {
        faculty_name: "gautam",
        faculty_subject: "software developemnt",
        faculty_id: "127",
        department: "CSE/IT",
      },
    ],
  },

  123457: {
    course_code: "123457",
    course_name: "cn/iot",
    course_credits: "4",
    contact_hours: "4",
    Branch: "CSE/IT",
    course_outcome: [
      { index: "1", Description: "its a co1", cognitive_level: "co1" },
      { index: "2", Description: "its a co2", cognitive_level: "co2" },
      { index: "3", Description: "its a co3", cognitive_level: "co3" },
      { index: "4", Description: "its a co4", cognitive_level: "co4" },
    ],
    faculty_table: [
      {
        faculty_name: "bhawna",
        faculty_subject: "software eng.",
        faculty_id: "123",
        department: "CSE/IT",
      },
      {
        faculty_name: "amit",
        faculty_subject: "software eng.",
        faculty_id: "124",
        department: "CSE/IT",
      },
      {
        faculty_name: "seema",
        faculty_subject: "software developement",
        faculty_id: "125",
        department: "CSE/IT",
      },
      {
        faculty_name: "aneeta",
        faculty_subject: "software fundamentals",
        faculty_id: "126",
        department: "CSE/IT",
      },
      {
        faculty_name: "gautam",
        faculty_subject: "software developemnt",
        faculty_id: "127",
        department: "CSE/IT",
      },
    ],
  },
  123458: {
    course_code: "123458",
    course_name: "VLSI",
    course_credits: "4",
    contact_hours: "4",
    Branch: "ECE",
    course_outcome: [
      { index: "1", Description: "its a co1", cognitive_level: "co1" },
      { index: "2", Description: "its a co2", cognitive_level: "co2" },
      { index: "3", Description: "its a co3", cognitive_level: "co3" },
      { index: "4", Description: "its a co4", cognitive_level: "co4" },
    ],
    faculty_table: [
      {
        faculty_name: "bhawna",
        faculty_subject: "Electrical",
        faculty_id: "128",
        department: "ECE",
      },
      {
        faculty_name: "amit",
        faculty_subject: "Electrical",
        faculty_id: "124",
        department: "ECE",
      },
      {
        faculty_name: "seema",
        faculty_subject: "Electrical",
        faculty_id: "125",
        department: "ECE",
      },
      {
        faculty_name: "aneeta",
        faculty_subject: "Electrical",
        faculty_id: "126",
        department: "ECE",
      },
      {
        faculty_name: "gautam",
        faculty_subject: "Electrical",
        faculty_id: "127",
        department: "ECE",
      },
    ],
  },
};
