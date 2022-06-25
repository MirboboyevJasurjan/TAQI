import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Rahbariyat.css'
import Nav from '../../../pages/templates/navbar/Nav';
import images10 from '../../Rasmlar/rahbariyat1.jpg';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import Sidebar from '../Sidebar/Sidebar';

const Rahbariyat = (props) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(job, name, email, phone) {
        return { job, name, email, phone };
    }

    const rows = [

        createData('Rektor', 'Prof. Ercan Kahya', 'kahyae@itu.edu.tr', `+99890 123-45-67`),
        createData('O’quv ishlari bo’yicha prorektor', 'Mirisayev Abdullo Ulmasovich', 'abdullo@taqi.edu.uz', `+99890 123-45-67`),
        createData('Yoshlar bilan ishlash bo’yicha prorektor', 'Abduvaliyev Zafar Maxmudovich ', 'zafar@taqi.edu.uz', `+99890 123-45-67`),
        createData('Ilmiy ishlar va innovatsiyalar bo’yicha prorektor', 'Nurimbetov Ravshan Ibragimovich ', 'ravshan@taqi.edu.uz', `+99890 123-45-67`),
        createData('Moliya - iqtisod ishlari bo’yicha prorektor', ' Irgashev Asatulla Abdujalilovich', 'asatulla@taqi.edu.uz', `+99890 123-45-67`),
        createData('Institut kengashi kotibi', '  Sultanov Alisher Sabirjanovich', 'alisher@taqi.edu.uz', `+99890 123-45-67`),
        createData('Bosh muhandis', 'Mahmud Muhammet', 'muhammet@taqi.edu.uz', `+99890 123-45-67`),
        createData('Rektor yordamchisi', 'Alimdjanova Shahrizoda Shosaidovna ', 'shahrizoda@taqi.edu.uz', `+99890 123-45-67`),
        createData('OTM matbuot kotibi', 'Yusupova Latofat Q', 'latofat@taqi.edu.uz', `+99890 123-45-67`),
        createData('Yurist konsult', 'Tagayev Zafar Achilovich', 'zafar@taqi.edu.uz', `+99890 123-45-67`),
        createData('Institut psixologi', 'Norova Nargiza Ma’murovna', 'nargiza@taqi.edu.uz', `+99890 123-45-67`),
        createData('Kotiba', 'Maxkamova Fazilat Bahtiyarovna', 'fazilat@taqi.edu.uz', `+99890 123-45-67`),
    ];

    const rows2 = [

        createData('O’quv-uslubiy boshqarma ', 'Sattorov Zafar Muradovich ', 'zafar@taqi.edu.uz ', `+99890 123-45-67`),
        createData('Ilmiy-tadqiqotlar, innovatsiyalar  va ilmiy-pedogogik kadrlar tayyorlash bo’limi ', 'Mirzahmedov Botir Xusnitdinovich ', 'botir@taqi.edu.uz ', `+99890 123-45-67`),
        createData('Yoshlar bilan ishlash, manaviyat va ma’rifat bo’limi ', ' Mirzayeva Feruza Tilayevna', ' feruza@taqi.edu.uz', `+99890 123-45-67`),
        createData('Ta’lim sifatini nazorat qilish ', 'Metyakubov Azamat Jumanazarovich ', ' azamat@taqi.edu.uz', `+99890 123-45-67`),
        createData('Xalqaro aloqalar bo’limi ', 'Nigmadjanova Anzirat Talipovna ', ' anzirat@taqi.edu.uz', `+99890 123-45-67`),
        createData('Xodimlar bo’limi', ' Blatsi Natalya Aleksandrovna', 'natalya@taqi.edu.uz', `+99890 123-45-67`),
        createData('Reja - moliya bo’limi', ' Allayarov Rahim', 'rahim@taqi.edu.uz', `+99890 123-45-67`),
        createData('Marketing va talabalar amaliyoti bo’limi', ' Qodirov Asqar ', 'asqar@taqi.edu.uz', `+99890 123-45-67`),
        createData('Buxgalteriya bo’limi', ' Xasanov Xusan Raimovich', 'xusan@taqi.edu.uz', `+99890 123-45-67`),
        createData('Devonxona va arxiv', ' Samiyeva Farida Majidovna', 'farida@taqi.edu.uz', `+99890 123-45-67`),
        createData('Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo’limi', 'Eltayeva Gulchexra Rustamovna', 'gulchexra@taqi.edu.uz', `+99890 123-45-67`),
        createData('Axborot resurs markazi', ' Vakilova Durdona Rahimovna', 'durdona@taqi.edu.uz', `+99890 123-45-67`),
        createData('Monitoring  va ichki nazorat bo’limi', ' Nazarov Akramjon Norboyevich', 'akramjon@taqi.edu.uz', `+99890 123-45-67`),
        createData('Raqamli ta’lim texnologiyalari markazi', ' Ummatov Elmurod Eshmuratovich', 'elmurod@taqi.edu.uz', `+99890 123-45-67`),
        createData('Malaka oshirish markazi ', ' ', '@taqi.edu.uz', `+99890 123-45-67`),
        createData('Qurilish sohasidagi menejerlarni qayta tayyorlash va ularning malakasini oshirish markaz', 'Abduvasikova Muqaddam Xasanovna ', 'muqaddam@taqi.edu.uz', `+99890 123-45-67`),
        createData('Taxririy-nashriyot bo’limi', 'Jabbarova Sayyora Baltabayevna ', 'sayyora@taqi.edu.uz', `+99890 123-45-67`),
        createData('Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo’limi', ' Esanova Marjona Ilhomjon qizi', 'marjona@taqi.edu.uz', `+99890 123-45-67`),
    ];
    const rows3 = [

        createData('Arxitektura ', ' Reyimbayev Shuhrat Sagdullayevich', ' Shuhrat@taqi.edu.uz', `+99890 123-45-67`),
        createData('Muhandislik qurilish infrastrukturasi', `G'iyosov Ilhom Karimovich`, 'Ilhom@taqi.edu.uz', `+99890 123-45-67`),
        createData('Bino va inshootlar', ' Aliyev Islambek Tursinbaevich', 'Islam@taqi.edu.uz', `+99890 123-45-67`),
        createData('Qurilishni boshqarish', ' Mamanazarov Oybek Shomurodovich', 'Oybek@taqi.edu.uz', `+99890 123-45-67`),

    ];

    const rows4 = [
        createData('Arxitekturaviy loyihalash', ' Hasanov Azamat Ozadovich', 'Azamat@taqi.edu.uz', `+99890 123-45-67`),
        createData('Shaharsozlik va landshaft arxitekturasi', ' Yahyayev Abdulla Abdujabbarovich ', 'Abdulla@taqi.edu.uz', `+99890 123-45-67`),
        createData('Arxitektura tarixi va nazariyasi', ' Shoisoyev Izzatillo', 'izzatillo@taqi.edu.uz', `+99890 123-45-67`),
        createData('Interyer va landshaft dizayni', ' Elmurodov Samidillo Salimovich', 'Samidullo@taqi.edu.uz', `+99890 123-45-67`),
        createData(`Tasviriy san'at kafedrasi`, ' Bobomurodov Ziyodullo', 'Ziyodullo@taqi.edu.uz', `+99890 123-45-67`),
        createData('Muhandislik grafikasi va kompyuterda loyihalash', ' Saydaliev Saidkarim Saidnabievich', 'Saidkarim@taqi.edu.uz', `+99890 123-45-67`),
        // 
        createData('Bino inshootlarni loyihalash kafedrasi', ' Baymatov Shahriddin Xushvaqtovich ', ' Shahriddin@taqi.edu.uz', `+99890 123-45-67`),
        createData('Qurilish konstruksiyalari kafedrasi', ' Yusupxodjayev Saidig’ani Abdullaxodjayevich ', `Saidg'ani@taqi.edu.uz`, `+99890 123-45-67`),
        createData('Gidrotehnik inshootlari, zamin va poydevorlar kafedrasi ', ' Toshxo’jayev Alisher Ulxo’jayevich ', 'Alisher@taqi.edu.uz', `+99890 123-45-67`),
        createData('Qurilish texnologiyasi va uni tashkil etish', ' Axmadiyorov Ulug’bek Solijonovich ', `Ulug'bek@taqi.edu.uz`, `+99890 123-45-67`),
        createData('Qurilish mehanikasi va inshootlar zilzilabardoshligi kafedrasi', ' Shadmanova Zuhra SalaxovnaBobomurodov ', 'Zuhra@taqi.edu.uz', `+99890 123-45-67`),
        createData('O’zbek tili va adabiyoti', ' Alimova Nigora Sunnatullayevna ', 'Nigora@taqi.edu.uz', `+99890 123-45-67`),
        // 
        createData(' Iqtisodiyot va ko’chmas mulkni boshqarish  kafedrasi', ' Turdiyev Abdullo Sagdullayevich', 'Abdullo@taqi.edu.uz', `+99890 123-45-67`),
        createData(' Qurilishda menejment kafedrasi', ' Davletov Islambek Xalikovich ', 'Islam@taqi.edu.uz', `+99890 123-45-67`),
        createData(' Axborot texnologiyalari kafedrasi', ' Fazilov Alisher Shomurodovich', 'Alisher@taqi.edu.uz', `+99890 123-45-67`),
        createData(' Shahar qurilishi va ho’jaligi kafedrasi', ' Xotamov Asadulla Toshtemirovich ', 'Asadullo@taqi.edu.uz', `+99890 123-45-67`),
        createData(' Falsafa va ijtimoiy siyosiy fanlar kafedrasi', ' Berdaliyev Nizomiddin Sheraliyevich', 'Nizomiddin@taqi.edu.uz', `+99890 123-45-67`),
        createData(' Xorijiy tillar kafedrasi', ' Utemuratova Zaruxan Ajimurotovna', 'Zaruxon@taqi.edu.uz', `+99890 123-45-67`),
        // 
        createData('Qurilish materiallari, buyumlari va konstruksiyalari texnologiyasi  ', 'Shakirov Tuyg’unjon Turg’unovich', 'Saidkarim@taqi.edu.uz', `+99890 123-45-67`),
        createData('Geodeziya va kadastr kafedrasi', 'Xamidova Maknona Baxtiyarovna ', 'Maknona@taqi.edu.uz', `+99890 123-45-67`),
        createData('Injenerlik kommunikatsiyalarini loyihalash kafedrasi', 'Maxmudova Dildora Ernazarovna ', 'Dildora@taqi.edu.uz', `+99890 123-45-67`),
        createData('Qurilish materiallari va kimyo kafedrasi', 'Majidov Samariddin Rashidovich ', 'Samariddin@taqi.edu.uz', `+99890 123-45-67`),
        createData('Matematika va tabiiy fanlar kafedrai', 'Zaitov Adilbek Atakhanovich ', 'Adilbek@taqi.edu.uz', `+99890 123-45-67`),









    ];

    function tops() {
        window.scrollTo(0, 0)
    }


    return (
        <>
            <Nav />
            <div className='div_imggg'>

            </div>

            <div>

                <div className='Sarlavha'>
                    <div className='haqida_father'>
                        <Sidebar />

                        <div className=' haqida_reightt'>
                            {/* Rahbariyat */}
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell className='headerr'>{''}</StyledTableCell>
                                            <StyledTableCell className='headerr' align="center">RAHBARIYAT</StyledTableCell>
                                            <StyledTableCell className='headerr' align="center">{''}</StyledTableCell>
                                            <StyledTableCell className='headerr' align="center">{''}</StyledTableCell>

                                        </TableRow>

                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name} className='roww'>
                                                <StyledTableCell component="th" scope="row" className='jobRow' >{row.job}</StyledTableCell>
                                                <StyledTableCell className='td jobName' component='td' align="left">{row.name}</StyledTableCell>
                                                <StyledTableCell className='td jobEmail' component='td' align="left">{row.email}</StyledTableCell>
                                                <StyledTableCell className='td jobNumb' component='td' align="left">{row.phone}</StyledTableCell>

                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            {/* Bo'lim boshliqlari */}
                            <br /><br /><br />

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell className='headerr'>{''}</StyledTableCell>
                                            <StyledTableCell className='headerr' align="center">BO’LIM BOSHLIQLARI</StyledTableCell>
                                            <StyledTableCell className='headerr' align="center">{''}</StyledTableCell>
                                            <StyledTableCell className='headerr' align="center">{''}</StyledTableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows2.map((row) => (
                                            <StyledTableRow key={row.name} className='roww'>
                                                <StyledTableCell component="th" scope="row" className='jobRow'>{row.job}</StyledTableCell>
                                                <StyledTableCell align="left" className='jobName'>{row.name}</StyledTableCell>
                                                <StyledTableCell align="left" className='jobEmail'>{row.email}</StyledTableCell>
                                                <StyledTableCell align="left" className='jobNumb'>{row.phone}</StyledTableCell>

                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            {/* FAKULTET DEKANLARI */}

                            <br /><br /><br />

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell className='headerr'>{''}</StyledTableCell>
                                            <StyledTableCell className='headerr' align="left">FAKULTET DEKANLARI</StyledTableCell>
                                            <StyledTableCell className='headerr' align="left">{''}</StyledTableCell>
                                            <StyledTableCell className='headerr' align="left">{''}</StyledTableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows3.map((row) => (
                                            <StyledTableRow key={row.name} className='roww'>
                                                <StyledTableCell component="th" scope="row" className='jobRow'>{row.job}</StyledTableCell>
                                                <StyledTableCell align="left" className='jobName'>{row.name}</StyledTableCell>
                                                <StyledTableCell align="left" className='jobEmail'>{row.email}</StyledTableCell>
                                                <StyledTableCell align="left" className='jobNumb'>{row.phone}</StyledTableCell>

                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>


                            {/* KAFEDRALAR */}

                            <br /><br /><br />

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className='headerr' align="center">{''}</TableCell>
                                            <TableCell className='headerr' align="center">KAFEDRALAR</TableCell>
                                            <TableCell className='headerr' align="center">{''}</TableCell>
                                            <TableCell className='headerr' align="center">{''}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows4.map((row) => (
                                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className="kaf_table" >
                                                <TableCell component="th" scope="row" className='jobRow'> {row.job} </TableCell>
                                                <TableCell align="left" className='jobName' >{row.name}</TableCell>
                                                <TableCell align="left" className='jobEmail' >{row.email}</TableCell>
                                                <TableCell align="left" className='jobNumb' >{row.phone}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>
                    </div>
                </div>
            </div>
            <FooterNav />
        </>


    )
}
export default Rahbariyat;