import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from '@react-pdf/renderer'
import { profile, experience, education, skills } from './data.js'

const BRAND = '#2b5cff'
const INK = '#1a1f36'
const MUTED = '#5b6478'
const LINE = '#e2e6ef'

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 44,
    paddingHorizontal: 44,
    fontSize: 9.5,
    lineHeight: 1.45,
    color: INK,
    fontFamily: 'Helvetica',
  },
  // Header
  name: { fontSize: 20, fontFamily: 'Helvetica-Bold', color: INK },
  title: { fontSize: 10.5, color: BRAND, fontFamily: 'Helvetica-Bold', marginTop: 3 },
  contactRow: {
    marginTop: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 8.5,
    color: MUTED,
  },
  contactItem: { marginRight: 10 },
  contactLink: { color: MUTED, textDecoration: 'none' },
  rule: { borderBottomWidth: 1, borderBottomColor: LINE, marginTop: 12, marginBottom: 12 },
  // Sections
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: INK,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  section: { marginBottom: 14 },
  summary: { color: '#333a4d', textAlign: 'justify' },
  // Experience
  job: { marginBottom: 11 },
  jobHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  jobRole: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: INK },
  jobCompany: { color: BRAND, fontFamily: 'Helvetica-Bold' },
  jobPeriod: { fontSize: 8.5, color: MUTED, textAlign: 'right' },
  jobLoc: { fontSize: 8.5, color: MUTED, marginBottom: 3 },
  bullet: { flexDirection: 'row', marginBottom: 2, paddingRight: 6 },
  bulletDot: { width: 10, color: BRAND },
  bulletText: { flex: 1, color: '#333a4d' },
  // Two column footer area
  twoCol: { flexDirection: 'row', gap: 22 },
  col: { flex: 1 },
  // Skills
  skillGroup: { marginBottom: 6 },
  skillGroupName: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: INK, marginBottom: 1 },
  skillItems: { color: MUTED, fontSize: 8.5 },
  // Education
  eduItem: { marginBottom: 8 },
  eduDegree: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: INK },
  eduSchool: { color: BRAND, fontSize: 8.5 },
  eduPeriod: { fontSize: 8, color: MUTED },
  eduDetails: { fontSize: 8.5, color: MUTED, marginTop: 1 },
  footer: {
    position: 'absolute',
    bottom: 22,
    left: 44,
    right: 44,
    fontSize: 7.5,
    color: MUTED,
    textAlign: 'center',
  },
})

function Bullet({ children }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  )
}

export default function ResumePDF() {
  return (
    <Document
      title={`${profile.name} — CV`}
      author={profile.name}
      subject={profile.title}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{profile.location}</Text>
            <Text style={styles.contactItem}>·</Text>
            <Link style={styles.contactLink} src={`mailto:${profile.email}`}>
              <Text style={styles.contactItem}>{profile.email}</Text>
            </Link>
            {profile.phone ? (
              <>
                <Text style={styles.contactItem}>·</Text>
                <Text style={styles.contactItem}>{profile.phone}</Text>
              </>
            ) : null}
            <Text style={styles.contactItem}>·</Text>
            <Link style={styles.contactLink} src="https://github.com/anwernuman">
              <Text style={styles.contactItem}>github.com/anwernuman</Text>
            </Link>
            <Text style={styles.contactItem}>·</Text>
            <Link style={styles.contactLink} src="https://linkedin.com/in/mohammadnumananwer">
              <Text style={styles.contactItem}>linkedin.com/in/mohammadnumananwer</Text>
            </Link>
          </View>
        </View>

        <View style={styles.rule} />

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.summary}>{profile.summary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((job, i) => (
            <View key={i} style={styles.job} wrap={false}>
              <View style={styles.jobHead}>
                <Text style={styles.jobRole}>
                  {job.role} <Text style={styles.jobCompany}>· {job.company}</Text>
                </Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              <Text style={styles.jobLoc}>{job.location}</Text>
              {job.points.map((p, j) => (
                <Bullet key={j}>{p}</Bullet>
              ))}
            </View>
          ))}
        </View>

        {/* Skills + Education */}
        <View style={styles.twoCol}>
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {skills.map((s, i) => (
              <View key={i} style={styles.skillGroup}>
                <Text style={styles.skillGroupName}>{s.group}</Text>
                <Text style={styles.skillItems}>{s.items.join(' · ')}</Text>
              </View>
            ))}
          </View>
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((e, i) => (
              <View key={i} style={styles.eduItem}>
                <Text style={styles.eduDegree}>{e.degree}</Text>
                <Text style={styles.eduSchool}>{e.school}</Text>
                <Text style={styles.eduPeriod}>{e.period}</Text>
                {e.details ? <Text style={styles.eduDetails}>{e.details}</Text> : null}
              </View>
            ))}
          </View>
        </View>

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `${profile.name} — Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}
