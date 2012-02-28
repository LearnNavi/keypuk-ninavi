import sys

file = 'keypuk-ninavi.user.js'
output = 'colored'

def convert(output):
    f = open(file, 'r+')
    g = open(output, 'w')
    lineList = f.readlines()
    for line in lineList:
        line = line.replace('\n', '')
        if line[:2] == 'es':
            line = line.split('\"')
            english = '[color=blue]' + line[1] + '[/color]'
            navi = line[3] 
            if line[3] == '':
                english = english.replace('color=blue', 'color=red')
            if line[3] != '':
                navi = '[i][color=green]' + line[3] + '[/color][/i]'
            g.write(english + ' = ' + navi + '\n')
        if line[:10] == '// Section':
            line = '[b]' + line[12:] + '[/b]'
            g.write('\n' + line + '\n')
        if line[:5] == '// es':
            line = line[4:]
            line = line.split('\"')
            english = '[color=red]' + line[1] + '[/color]'
            if line[3] == '':
                navi = ''
            if line[3] != '':
                english = english.replace('color=red', 'color=orange')
                navi = '[i][color=orange]' + line[3] + '[/color][/i]'
            g.write(english + ' = ' + navi + '\n')
    g.close()
    print 'Lolatem.'


if __name__ == "__main__":
    if (sys.argv[1] == 'latem'): convert(output)
