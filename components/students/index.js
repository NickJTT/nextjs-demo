import styles from './styles.module.scss';

export default function Students({ students }) {
  return <div className={styles.students}>
    <h1>All Students</h1>
    { students.map(student => <div key={student.id}>
        <a>
          <h3>{ student.name }</h3>
        </a>
    </div>) }
  </div>;
}
