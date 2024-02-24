import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment: { course: string | undefined; }) => assignment.course === courseId);
  return (
    <>
    <div>
      <input type="text" placeholder="Search for Assignments" />
      <button type="button">Group</button>
      <button type="button">Assignment</button>
      <select name="Edit Assignment Dates">
        <option value="EDIT">Edit Assignment Dates</option>
      </select>
    </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment: { _id: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;

