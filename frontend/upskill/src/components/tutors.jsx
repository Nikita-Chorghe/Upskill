import React, { Component } from "react";
import { getTutors } from "./../services/tutorService";
// import { Link } from "react-router-dom";
import TutorsTable from "./tutorsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "./../utils/paginate";
import { getCourses } from "../services/courseService";
import _ from "lodash";

class Tutors extends Component {
  state = {
    tutors: [],
    courses: [],
    currentPage: 1,
    pageSize: 10,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getCourses();
    const courses = [{ name: "All Courses" }, ...data];

    const { data: tutors } = await getTutors();
    this.setState({ tutors, courses });
  }

  handleBuy = (tutor) => {
    console.log(tutor);
    //todelete
    // const tutors = this.state.tutors.filter((m) => m._id !== tutor._id);
    // this.setState({ tutors });
    // let updatedCart = [...this.state.cart, tutor];
    // this.setState({ cart: updatedCart }, () => {
    //   console.log("Updated Cart:", this.state.cart);
    // });
  };

  handleLike = (tutor) => {
    console.log("liked Clicked", tutor);
    const tutors = [...this.state.tutors];
    const index = tutors.indexOf(tutor);
    tutors[index] = { ...tutors[index] };
    tutors[index].liked = !tutors[index].liked;
    this.setState({ tutors });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleCourseSelect = (course) => {
    this.setState({ selectedCourse: course, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedCourse,
      tutors: allTutors,
    } = this.state;
    const filtered =
      selectedCourse && selectedCourse._id
        ? allTutors.filter((m) => m.course._id === selectedCourse._id)
        : allTutors;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const tutors = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: tutors };
  };

  render() {
    const { length: count } = this.state.tutors;
    if (count === 0) return <p>There are no Tutor in datatbase</p>;
    const { pageSize, currentPage, sortColumn } = this.state;

    const { totalCount, data: tutors } = this.getPagedData();

    return (
      <div className="container mt-4">
        <div className="row ">
          <h1>Tutors List</h1>
        </div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.courses}
              // items={filtered.length}
              textProperty="name"
              valueProperty="_id"
              selectedItem={this.state.selectedCourse}
              onItemSelect={this.handleCourseSelect}
            />
          </div>
          <div className="col">
            <TutorsTable
              tutors={tutors}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onBuy={this.handleBuy}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
          {/* <div>
          <Link to="/cart" className="btn btn-primary">
            Go to Cart
          </Link>
        </div> */}
        </div>
      </div>
    );
  }
}

export default Tutors;
